const express = require("express");
const router = express.Router();

const { renderDashboardHome } = require("../controllers/dashboardController");

// /...
router.get("/", renderDashboardHome);



module.exports = router