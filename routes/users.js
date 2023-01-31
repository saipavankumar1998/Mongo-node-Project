const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router()

//GET ALL USERS
router.get("/", (req, res) => {
  let usersList = [];
  db.collection("users").aggregate([
    {
      $project:
        {username:1 , fullName: { $concat: ["$firstName", " ", "$lastName"] }}
    }
  ])
    .forEach((user) => usersList.push(user))
    .then(() => res.status(200).json(usersList))
    .catch((error) => res.status(500).json({ error: error.message }));
});

//GET SINGLE USER BY ID
router.get("/:id", (req, res) => {
  let usersList = []
  const id = req.params.id;
  if (ObjectId.isValid(id)) {

    db.collection("users").aggregate([
      { $match: { "_id": ObjectId(id) } },
      { $project: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } }
    ]).forEach((user) => usersList.push(user))
      .then(() => {
        console.log("dicdsjshfiuhf", usersList)
        res.status(200).json(usersList);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(500).json({ error: "ID is invalid" });
  }
});

//INSERT SINGLE USER TO THE COLLECTION
router.post("/", (req, res) => {
  const user = req.body;
  db.collection("users")
    .insertOne(user)
    .then((result) => {
      res
        .status(200)
        .json({ result: result, message: "Sucessfuly added the user" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Couldn't add the user" });
    });
});

//DELETE SINGLE USER FROM THE COLLECTION BASED ON ID
router.delete("/:id", (req, res) => {
  const user_id = req.params.id;
  if (ObjectId.isValid(user_id)) {
    db.collection("users")
      .deleteOne({ _id: ObjectId(user_id) })
      .then((result) => {
        res.status(200).json({
          result: result,
          message: "deleted the document",
        });
      })
      .catch((err) => {
        res.status(500).json({ error: "Couldn't delete the document" });
      });
  } else {
    res.status(500).json({ error: "cannot delete - invalid ID" });
  }
});

//UPDATE USER BIO
router.patch("/:id", (req, res) => {
  const updates = req.body;
  const id = req.params.id;

  if (ObjectId.isValid(id)) {
    db.collection("users")
      .updateOne(
        { _id: ObjectId(id) },
        {
          $set: updates,
        },
        { upsert: true },
      )
      .then((result) =>
        res.status(200).json({
          result: result,
          message: "Updated the document",
        }),
      )
      .catch((err) => {
        res.status(500).json({ error: "Couldn't update the document" });
      });
  } else {
    res.status(500).json({ error: "Couldn't update the document- Invalid ID" });
  }
});

module.exports = router;