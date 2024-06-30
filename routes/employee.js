const express = require("express");
const router = express.Router();
const { createEmployee, viewEmployee } = require("../controllers/employeeController");


router.post("/add", createEmployee);
router.get("/view", viewEmployee);


module.exports = router;