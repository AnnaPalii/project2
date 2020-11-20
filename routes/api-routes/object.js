const express = require("express");
const router = express.Router();
const db = require("../../models");

// post comment route -> back to index
router.post("/create", (req, res, next) => {
   console.log("Object request!")
   db.Object.create(req.body)
      .then(newObject => {
         console.log("[node] new object:", newObject.object);
         res.json(newObject);
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
