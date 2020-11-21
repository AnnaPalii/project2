const express = require("express");
const router = express.Router();
const db = require("../../models");

// post comment route -> back to index
// router.post("/create", (req, res, next) => {
//    console.log("Object request!")
//    db.Object.create(req.body)
//       .then(newObject => {
//          console.log("[node] new object:", newObject.object);
//          res.json(newObject);
//       })
//       .catch(err => {
//          res.status(500);
//          next(err);
//       });
// });
router.post("/create", (req, res, next) => {
   req.body
   db.Object.create({
      name: req.body.name,
      length: req.body.length,
      width: req.body.width,
      height: req.body.height,
      RenterId: req.body.RenterId
   })
      .then(function () {
         console.log("[node] new object:", req.body);
         res.json(req.body);
      })
      .catch(err => {
         res.status(500);
         next(err.message);
      });
});

module.exports = router;
