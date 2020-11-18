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
   res.redirect('html/renterinput.html');
});

router.get("/object.html", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/html/object.html"));
});

router.get("/results.html", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/html/results.html"));
});

router.get("/providerlastpage.html", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/html/providerlastpage.html"));
});
module.exports = router;
