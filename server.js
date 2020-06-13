const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
//Import routes
const Users = require("./Routes/api/users");
const Courses = require("./Routes/api/courses");
const CourseEnrollement = require("./Routes/api/courseEnrollement")
//middlewear
const app = express();

//body parser middlewwear
app.use(bodyParser.json());
app.use(cors());

//get the mongodb url
const db = require("./config/keys").mongoURI;

//Connet to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Mongo DB Connected."))
  .catch(err => console.log(err));

  
app.use("/api/users", Users);
app.use("/api/courses", Courses);
app.use("/api/enrollement",CourseEnrollement)
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on ${PORT}`));