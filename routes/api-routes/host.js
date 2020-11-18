const express = require("express");
const router = express.Router();
const db = require("../../models");

// post comment route -> back to index
router.post("/create", (req, res, next) => {
   console.log('host')
   db.Host.create(req.body)
      .then(newHost => {
         console.log("[node] new host:", newHost.host);
         res.redirect("/");
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
