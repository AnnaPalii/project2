const express = require("express");
const router = express.Router();
var path = require('path');
// const mainRoute = require("./public/html");

// get route -> index
router.get("/", (req, res) => {
   res.redirect('html/main.html');
});

// renter page
router.get("/html/renterinput.html", (req, res) => {
   res.redirect('html/renterinput.htmll');
});

module.exports = router;
