const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
var cors = require("cors");
const db = config.get("mongoURI");

//Middleware
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("uploads"));
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database connected..."))
  .catch(err => console.log(err));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use("/api/user", require("./routes/api/useritems"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started at port ${port}`));
