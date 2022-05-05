const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("welcome to my application!")
})

const locationRoutes = require("./locationRoutes");
router.use("/api/locations",locationRoutes )

const travelRoutes = require("./travelRoutes");
router.use("/api/travelers",travelRoutes)

const tripRoutes = require("./tripsRoutes");
router.use("/api/trips",tripRoutes)

module.exports = router;