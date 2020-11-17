const express = require("express");
const router = express.Router();
var path = require('path');
// const mainRoute = require("./public/html");

// get route -> index
router.get("/", (req, res) => {
   res.sendFile(path.join(__dirname + '/main.html'));
});

// comments page
// router.use("./public/html/main.html", mainRoute);

module.exports = router;
