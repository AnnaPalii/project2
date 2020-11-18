const express = require("express");
const router = express.Router();
const db = require("../../models");

// post comment route -> back to index
router.post("/create", (req, res, next) => {
   db.Host.create(req.body)
      .then(newHost => {
         console.log("[node] new host:", newHost.host);
         res.redirect("/providerlastpage.html");
      })
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
