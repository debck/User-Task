const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

//@GET: Get all registered user's data
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@POST : Add user to the database
router.post("/", upload.single("profileimage"), (req, res) => {
  // console.log(req.file);
  // console.log(req.body.name);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    img: req.file.path
  });
  newUser.save().then(item => res.json(item));
});

module.exports = router;
