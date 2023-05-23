const mongoose = require('mongoose');
const { Schema } = mongoose;
// const uniqueValidator = require('mongoose-unique-validator');

const rolesSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    roleName: {
        type: String,
        required: true
    }
});

const Roles = mongoose.model("Roles", rolesSchema);

module.exports = Roles;