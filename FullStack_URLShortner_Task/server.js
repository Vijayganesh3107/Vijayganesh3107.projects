const cors = require("cors");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Events and node mailer for sending the mail
const nodemailer = require("nodemailer");
const eventtrigger = require("events");
var eveentemitter = new eventtrigger();
eveentemitter.on("email-trigger", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vijay.ganeshp95@gmail.com",
      pass: "x123456",
    },
  });
  var mailoptions = {
    from: `vijay.ganeshp95@gmail.com`,
    to: `vijay.ganeshp95@gmail.com`,
    subject: `Secret Mail from nodejs`,
    html: `<div>Please click the below link to activate your account.This link will be valid for 24hrs only
            <a href="http://127.0.0.1:5500/auth.html">http://localhost:3000/users/auth/</a></div>`,
  };
  transporter.sendMail(mailoptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("email sent" + info.response);
    }
  });
});

app.use(cors());

const mongodb = require("mongodb");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const mongoclient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const shortid = require("shortid"); /*For generating the unique short id*/
const { json } = require("body-parser");
const { count } = require("console");

//API For Inserting data to the table
app.post("/longURL", async (req, res) => {
  try {
    var client = await mongoclient.connect(url, { useUnifiedTopology: true });
    var db = client.db("assignment");
    req.body.shortURL = `vjbitly.${shortid.generate(8)}`;
    req.body.clicked = 0;
    var checkdata = await db
      .collection("urls")
      .find({
        $and: [{ longURL: req.body.longURL }, { email: req.body.email }],
      })
      .count();
    if (checkdata) {
      res.json({
        message: "ShortURL Already present for the URL",
      });
      client.close();
    } else {
      await db.collection("urls").insertOne(req.body);

      res.json({
        message: "Data Inserted",
      });
      client.close();
    }
  } catch (error) {
    console.log(error);
  }
});

//API to update the no of clicks
app.put("/longURL", async (req, res) => {
  var client = await mongoclient.connect(url, { useUnifiedTopology: true });
  var db = client.db("assignment");
  var result = await db
    .collection("urls")
    .findOne({ longURL: req.body.longURL });

  if (result) {
    var resultdata = await db
      .collection("urls")
      .updateOne(
        { email: req.body.email, longURL: req.body.longURL },
        { $inc: { clicked: 1 } }
      );

    client.close();
    res.json({
      message: "Data Updated",
    });
  } else {
    client.close();
    res.json({
      message: "Data Not Found so not Updated",
    });
  }
});

//API for displaying the data and Filtering by email
app.post("/getlongURL", async (req, res) => {
  try {
    var client = await mongoclient.connect(url, { useUnifiedTopology: true });
    var db = client.db("assignment");
    var data = await db
      .collection("urls")
      .find({ email: req.body.email })
      .toArray();
    res.json(data);
    client.close();
  } catch (error) {
    console.log(error);
  }
});

//API for registering users
app.post("/users/register", async (req, res) => {
  var client = await mongoclient.connect(url, { useUnifiedTopology: true });
  var db = client.db("assignment");
  var checkreq = await db
    .collection("registeredusers")
    .find({ email: req.body.email })
    .count();
  if (checkreq == 1) {
    client.close();
    res.json({
      message: "User Already with same Registered Email-ID",
    });
  } else {
    var salt = await bcrypt.genSalt(10);
    var hashedpassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedpassword;
    req.body.activated = false;
    var insertres = await db.collection("registeredusers").insertOne(req.body);
    var token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);

    // eveentemitter.emit("email-trigger");
    client.close();
    res.json({
      message: `User registered and a mail has been sent to ${req.body.email} and activate the account`,
      token,
    });
  }
});

//API For Validation using JWT
app.put("/users/auth/:email", authorize, async (req, res) => {
  var client = await mongoclient.connect(url, { useUnifiedTopology: true });
  var db = client.db("assignment");
  var checkdata = await db
    .collection("registeredusers")
    .find({ $and: [{ email: req.params.email }, { activated: true }] })
    .count();
  if (checkdata == 1) {
    res.json({
      message: "User already activated",
    });
  } else {
    var data = await db
      .collection("registeredusers")
      .updateOne({ email: req.params.email }, { $set: { activated: true } });
    res.json({
      message: "User Account successfully activated",
    });
  }
});

//Function to check if JWT is valid and User has access
function authorize(req, res, next) {
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
      (err, decode) => {
        if (decode) {
          if (req.params.email == decode.email) next();
          else {
            res.json({
              message: "Not Authorized",
            });
          }
        } else {
          res.json({
            message: "Token not valid",
          });
        }
      }
    );
  } else {
    res.json({
      message: "Token not present",
    });
  }
}

//API for login
app.post("/login", async (req, res) => {
  var client = await mongoclient.connect(url, { useUnifiedTopology: true });
  var db = client.db("assignment");
  var data = await db
    .collection("registeredusers")
    .findOne({ email: req.body.email });
  if (data && data.activated == true) {
    var output = await bcrypt.compare(req.body.password, data.password);
    if (output) {
      res.json({
        message: "success",
        email: req.body.email,
      });
    } else {
      res.json({
        message: "Userame and password doesnt match",
      });
    }
  } else {
    res.json({
      message: "User not activated / User not registered",
    });
  }
});

//API for forgetpassword
app.post("/user/forgotpassword", async (req, res) => {
  var client = await mongoclient.connect(url, { useUnifiedTopology: true });
  var db = client.db("assignment");
  var data = await db
    .collection("registeredusers")
    .findOne({ email: req.body.email });
  if (data && data.activated == true) {
    client.close();
    res.json({
      message: "User Present",
      email: req.body.email,
    });
  } else {
    client.close();
    res.json({
      message: "User not Present",
    });
  }
});

//API for changepassword
app.put("/user/changepassword", async (req, res) => {
  var client = await mongoclient.connect(url, { useUnifiedTopology: true });
  var db = client.db("assignment");
  var data = await db
    .collection("registeredusers")
    .findOne({ email: req.body.email });
  if (data && data.activated == true) {
    var salt = await bcrypt.genSalt(10);
    var hashdedpass = await bcrypt.hash(req.body.password, salt);
    var updateddata = await db
      .collection("registeredusers")
      .updateOne(
        { email: req.body.email },
        { $set: { password: hashdedpass } }
      );
    res.json({
      message: "Sucessfully updated the password",
    });
  } else {
    res.json({
      message: "Account not activated or Email is not registered",
    });
  }
});

app.listen(3000);
