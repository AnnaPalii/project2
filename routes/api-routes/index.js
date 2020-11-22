const router = require("express").Router();
const renterRoute = require("./renter");
const hostRoute = require("./host");
const objectRoute = require("./object");
const resultsRoute = require("./results");


// go to /api/renter
router.use("/renter", renterRoute);
// go to /api/host
router.use("/host", hostRoute);
// go to /api/host
router.use("/object", objectRoute);

router.use("/results", resultsRoute);

module.exports = router;
