const express = require("express");
const mongodb = require("mongodb");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

app.post("/roommaster", (req, res) => {
  mongoClient.connect(url, { useUnifiedTopology: true }, (err, connection) => {
    var db = connection.db("assignment");
    var cursor = db.collection("roommaster").insertOne(req.body);
    cursor.then((data) => {
      res.json(data);
      connection.close();
    });
  });
});

app.post("/roomtransaction", (req, res) => {
  mongoClient.connect(url, { useUnifiedTopology: true }, (err, connection) => {
    var db = connection.db("assignment");
    var cursor = db
      .collection("roomtrans")
      .insertOne(req.body)
      .then((data) => {
        res.json(data);
        connection.close();
      });
  });
});

app.get("/roomtransaction/:id/:name/:date/:stime/:etime", (req, res) => {
  mongoClient.connect(url, { useUnifiedTopology: true }, (err, connection) => {
    var db = connection.db("assignment");
    var cursor = db
      .collection("roomtrans")
      .find({
        $and: [
          { room_id: parseInt(req.params.id) },
          { start_time: req.params.stime },
          { date: req.params.date },
        ],
      })
      .count();
    cursor.then((data) => {
      if (data > 0) {
        res.json({
          message: "Hall already booked",
        });
        connection.close();
      } else {
        // res.json(data);
        var finddata = db.collection("roomtrans").insertOne({
          room_id: parseInt(req.params.id),
          customer_name: req.params.name,
          date: req.params.date,
          start_time: req.params.stime,
          end_time: req.params.etime,
          status: "booked",
        });
        finddata.then((data) => {
          console.log(data);
          res.json(data);
          connection.close();
        });
      }
    });
  });
});

app.get("/roombookinghistory", (req, res) => {
  mongoClient.connect(url, (err, connection) => {
    var db = connection.db("assignment");
    var cursor = db
      .collection("roomtrans")
      .aggregate([{ $sort: { room_id: 1 } }, { $project: { _id: 0 } }])
      .toArray();
    cursor.then((data) => {
      connection.close();
      div.inner = res.json(data);
    });
  });
});
app.get("/customerbookinghistory", (req, res) => {
  mongoClient.connect(url, (err, connection) => {
    var db = connection.db("assignment");
    var cursor = db
      .collection("roomtrans")
      .aggregate([
        { $sort: { customer_name: 1 } },
        { $project: { _id: 0, status: 0 } },
      ])
      .toArray();
    cursor.then((data) => {
      console.log(data);
      res.json(data);
      connection.close();
    });
  });
});

var port = process.env.PORT || 6000;
app.listen(port);
