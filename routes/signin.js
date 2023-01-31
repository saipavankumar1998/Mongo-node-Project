const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const dbUser = await db.collection("users")
      .findOne({ "username": user.username });

    if (user.username == dbUser.username) {
      const isValidPassword = await bcrypt.compare(user.password, dbUser.password)
      if (isValidPassword) { res.json({ msg: "Authenticated user. Successfully logged In" }) }
      else res.status(400).json({ message: "Wrong Password" })
    } else res.json({ msg: "User not found in the DB" })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
});

module.exports = router

