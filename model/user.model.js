const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true
    },
    // date: {
    //     type: Date,
    //     default: Date.now()
    // }
},
{
    timestamps: true,
}
);

// userSchema.set("toJSON", {
//     transform: (document, returnedObject) =>{
//         returnedObject.id = returnedObject._id.toString();
//         delete returnedObject._id;
//         delete returnedObject._v;
//         delete returnedObject.password;
//     },
// });

userSchema.plugin(uniqueValidator, {message: "Register Number is already in use."});
const User = mongoose.model("users", userSchema);

module.exports = User;