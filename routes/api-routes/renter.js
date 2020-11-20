const express = require("express");
const router = express.Router();
const db = require("../../models");

console.log("renter");

router.post("/create", (req, res, next) => {
      console.log(req);
      db.Renter.create(req.body)
      .then(newRenter => {
         console.log("[node] new renter:", newRenter);
         res.json(newRenter);
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
