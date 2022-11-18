const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// authentication of register

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res
        .status(400)
        .send({ message: "User already exists", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    req.body.password = hashPassword;
    const newuser = new User(req.body);

    await newuser.save();
    res
      .status(200)
      .send({ message: "User created successfully", success: true });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", success: false });
  }
});


// authentication of login form

router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if(!user){
      return res
       .status(400)
        .send({ message: "User does not exist", success: false });
    }
    const isMatch = await bcrypt.compare(user.body.password, user.password); //first is encrypt password 2nd is normal password
    if(!isMatch){
      return res
      .status(200)
       .send({ message: "Password does not match", success: false });
    }


  } catch (error) {}
});

module.exports = router;
