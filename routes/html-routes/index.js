const express = require("express");
const router = express.Router();
var path = require('path');
// const mainRoute = require("./public/html");

// get route -> index
router.get("/", (req, res) => {
   res.redirect('main.html');
});

// renter page
router.get("/renterinput.html", (req, res) => {
   res.redirect('renterinput.html');
});

router.get("/object.html", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/object.html"));
});

router.get("/results.html", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/results.html"));
});

router.get("/providerlastpage.html", (req, res) => {
   res.sendFile(path.join(__dirname, "../../public/providerlastpage.html"));
});
module.exports = router;
