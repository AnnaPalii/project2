const express = require("express");
const router = express.Router();
const db = require("../../models");

// post comment route -> back to index
router.post("/create", (req, res, next) => {
   req.body.HostId = 1
   req.body.RenterId = 1
   db.Object.create(req.body)
      .then(newObject => {
         console.log("[node] new object:", newObject.object);
         res.redirect("/results.html");
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
