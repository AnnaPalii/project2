const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", function (req,res){
    db.Host.findAll().then(function(dbHost){
    res.json(dbHost);
    });
});

module.exports = router;