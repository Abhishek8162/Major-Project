const { json } = require("express");
const bodyParser = require("body-parser");
const express = require("express");

const jwt = require("jsonwebtoken");
const router = express.Router();

const bcrypt = require("bcryptjs");

//require('../db/conn');
router.use(bodyParser.json());
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello from the backend");
});

router.get("/StudentDashboard", (req, res) => {
  res.send("This is dash");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password, cpassword } = req.body;
    console.log(name);
    console.log(email);

    if (!name || !email || !phone || !password || !cpassword) {
      return res.status(422).json({ error: "Please fill the fields properly" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already registered" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password is not matching" });
    } else {
      //res.status(201).json({message:"Registered Successfully"})
      const user = new User({ name, email, phone, password, cpassword });
      await user.save();
      res.status(201).json({ message: "Registered Successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the fields " });
    }

    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Signin Succesfiull" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
