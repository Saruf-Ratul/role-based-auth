const { validationResult } = require('express-validator');
const Employee = require('../models/Employee');

// Create a new employee
exports.createEmployee = async(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Assuming req.body contains necessary employee data
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// View a All employee
exports.viewEmployee = async(req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};