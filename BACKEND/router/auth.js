const { json } = require("express");
const bodyParser = require("body-parser");
const express = require("express");

const JWT = require("jsonwebtoken");
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
    const { name, email, phone,address,post,college, password, cpassword } = req.body;
    console.log(name);
    console.log(email);

    if (!name || !email || !phone ||!address||!post||!college || !password || !cpassword) {
      return res.status(422).json({ error: "Please fill the fields properly" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already registered" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password is not matching" });
    } else {
      //res.status(201).json({message:"Registered Successfully"})
      const user = new User({ name, email, phone,address,post,college,password, cpassword });
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

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        const jwtData = {
          email: userLogin.email,
        };
        const token = JWT.sign(
          jwtData,
          "MYNAMEISABHISHEKUMARGOVERNMENTCOLLEGEOFENGINEERINGBTECHCSE",
          {
            expiresIn: "5d",
          }
        );

        res.status(200).cookie("token", token).json({
          sucess: true,
          message: "login sucessful",
          userLogin,
        });
      }
    } else {
      res.status(400).json({ sucess: false, error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/user/getData", async (req, res) => {
  try {
    res.send(req.cookies);
  } catch (error) {
    res.status(500).json({
      message: "Some error occured",
      error_message: error.message,
    });
  }
});



// router.post("/addexam", async (req, res) => {
//   try {
//     const { score, totalquestions ,email} = req.body;
//     var examname="tcs"
//     exams:[{examname,score, totalquestions }]

//     if (!score||!totalquestions||!email) {
//       return res.status(400).json({ error: "Error in submitting " });
//     }

//     const updateDocument = async(email)=>
//     {
//       try{
// const result = await User.updateOne({ email: email },
//   {$set:{exams:exams}}
//   );
//       }
//       catch(err)
//       {
//           console.log(err);
//       }
//     }

module.exports = router;
