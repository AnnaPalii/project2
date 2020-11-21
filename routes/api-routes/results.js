const express = require("express");
const router = express.Router();
const db = require("../../models");

app.get("/results", function (req,res){
    db.Host.findAll().then(function(dbHost){
        res.json(dbHost);
    });
});

module.exports = router;