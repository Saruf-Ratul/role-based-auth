const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    employeeImage: {
        type: String,
        required: false
    },
    totalLeaves: {
        type: Number,
        required: true
    },
    remainingLeaves: {
        type: Number,
        required: true
    },
    leaveStatus: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);