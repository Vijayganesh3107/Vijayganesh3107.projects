const express = require("express");
const mongodb = require("mongodb");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

/*----------------------------------------- Room Details Starts------------------------------------------------*/
app.post("/roomdetails", (req, res) => {
  mongoClient.connect(url, (err, client) => {
    if (err) throw err;
    var db = client.db("assignment");
    var cursor = db.collection("roomdetails").insertOne(req.body);
    cursor.then((data) => {
      res.json(data);
      client.close();
    });
  });
});
app.get("/getroomdetails", (req, res) => {
  mongoClient.connect(url, (err, connection) => {
    if (err) throw err;
    var db = connection.db("assignment");
    var cursor = db.collection("roomdetails").find().toArray();
    cursor.then((data) => {
      res.json(data);
      connection.close();
    });
  });
});
// app.delete("/roomdetails/:id", (req, res) => {
//   mongoClient.connect(url, (err, connection) => {
//     var db = connection.db("assignment");
//     db.collection("roomdetails").deleteOne(
//       { _id: mongodb.ObjectID(req.params.id) },
//       (err, data) => {
//         res.json({
//           message: "Deleted Successfully",
//         });
//       }
//     );
//   });
// });
/*----------------------------------------- Room Details Ends------------------------------------------------*/

// app.post("/bookroom/:id", (req, res) => {
//   mongoClient.connect(url, (err, client) => {
//     if (err) throw err;
//     var db = client.db("assignment");
//     var cursor = db.collection("bookroom").insertOne(req.body);
//     cursor.then((data) => {
//       res.json(data);
//       client.close();
//     });
//     db.collection("bookroom").updateOne(
//       { customer_name: req.body.customer_name },
//       { $set: [{ booked_room: "true" }, { room_id: +req.params.id }] },
//       (err, data) => {
//         res.json({
//           message: "Booked",
//         });
//       }
//     );
//   });
// });

// app.get("/getbookedroomdetails", (req, res) => {
//   mongoClient.connect(url, (err, connection) => {
//     if (err) throw err;
//     var db = connection.db("assignment");
//     var cursor = db.collection("bookroom").find().toArray();
//     cursor.then((data) => {
//       res.json(data);
//       connection.close();
//     });
//   });
// });
app.listen(3000);

// app.put("/movies/:Id", (req, res) => {
//   mongoClient.connect(url, (err, connection) => {
//     var db = connection.db("task");
//     db.collection("movies").updateOne(
//       { _id: mongodb.ObjectID(req.params.Id) },
//       { $set: req.body },
//       (err, data) => {
//         res.json({
//           message: "Updated Successfully",
//         });
//         connection.close();
//       }
//     );
//   });
// });

// app.post("/movies-create", (req, res) => {
//   mongoClient.connect(url, (err, connection) => {
//     var db = connection.db("task");
//     var cursor = db.collection("movies").insertOne(req.body);
//     cursor.then((data) => {
//       res.json(data);
//       connection.close();
//     });
//   });
// });
// app.delete("/movies-remove/:id", (req, res) => {
//   mongoClient.connect(url, (err, connection) => {
//     var db = connection.db("task");
//     db.collection("movies").deleteOne(
//       { _id: mongodb.ObjectID(req.params.id) },
//       (err, data) => {
//         res.json({
//           message: "Deleted Successfully",
//         });
//       }
//     );
//   });
// });

// const express = require("express");
// const mongodb = require("mongodb");
// const app = express();
// const bodyParser = require("body-parser");
// const mongoClient = mongodb.MongoClient;
// const url = "mongodb://localhost:27017";
// app.use(bodyParser.json());
// app.get("/all", function (req, res) {
//   mongoClient.connect(url, function (err, client) {
//     if (err) throw err;
//     var db = client.db("b14we");
//     var cursor = db.collection("films").find().toArray();
//     cursor.then(function (data) {
//       res.json(data);
//       client.close();
//     });
//   });
// });

// app.put("/film/:id", function (req, res) {
//   mongoClient.connect(url, function (err, client) {
//     console.log(req.body);
//     if (err) throw err;
//     var db = client.db("b14we");
//     db.collection("films").updateOne(
//       { _id: mongodb.ObjectID(req.params.id) },
//       { $set: req.body },
//       function (err, data) {
//         res.json({
//           message: "Modified",
//         });
//         client.close();
//       }
//     );
//   });
// });

// app.post("/film-create", async function (req, res) {
//   mongoClient.connect(url, async function (err, client) {
//     if (err) throw err;
//     var db = client.db("b14we");
//     let insertData = await db.collection("films").insertOne(req.body);
//     client.close();
//     res.json(insertData);
//   });
// });

// app.listen(3000);
