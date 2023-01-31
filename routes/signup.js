const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = {
    firstName: req.body.name.firstName,
    lastName: req.body.name.lastName,
    username: req.body.username,
    password: hashedPassword,
  };

  db.collection("users")
    .insertOne(user)
    .then((result) => {
      res.status(200).json({
        result: result,
        message: "Sucessfuly registered",
      });
    })
    .catch((err) => {
      res.status(500).json({ error: "Couldn't add the user" });
    });
});

module.exports = router
