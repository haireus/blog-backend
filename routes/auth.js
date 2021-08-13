const router = require("express").Router();
const User = require("../models/User");
const brcypt = require("bcrypt");

const saltRound = 10;

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await brcypt.genSalt(saltRound);
    const hashedPassword = await brcypt.hash(req.body.password, salt);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
