const express = require("express");
const router = express.Router();
const db = require("../../models");

console.log("renter");
// post comment route -> back to index

// "/api/renter/create"

router.post("/create", (req, res, next) => {
   console.log("renter create");
   console.log(req);
   
   db.Renter.create(req.body)
      .then(newRenter => {
         console.log("[node] new renter:", newRenter.renter);
         res.redirect("/");
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
