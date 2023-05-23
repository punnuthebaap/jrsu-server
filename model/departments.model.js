const mongoose = require('mongoose');
const { Schema } = mongoose;
// const uniqueValidator = require('mongoose-unique-validator');

const departmentsSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    },
    hasSubDept: {
        type: String,
        required: true 
    },
    shortName: {
        type: String,
        required: true 
    },
    subDept: {
        type: Array
    }
});

const Departments = mongoose.model("departments", departmentsSchema);

module.exports = Departments;