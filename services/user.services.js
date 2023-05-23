const User = require('../model/user.model');
const Roles = require('../model/roles.model');
const Departments = require('../model/departments.model');
const bcrypt = require('bcryptjs');
const auth = require('../middlewares/auth');

async function login({ userId, password }, callback){
    const user = await User.findOne({ userId: userId });
    if (userId!=null){
        if (bcrypt.compareSync(password, user.password)){
            const token = auth.generateAccessToken(userId);
            return callback(null, {...user.toJSON(), token});
        }
        else{
            return callback({
                message: "Invalid Email/Password"
            })
        }
    }
    else{
        return callback({
            message: "Invalid Email/Password"
        })
    }
};

async function getAllRoles(callback) {
    const roles = await Roles.find({});
    console.log(roles)
    if (roles!=null){
        return callback(null,roles);
    }
    else{
        return callback({
            message: "Did not able to find users"
        });
    }
};

async function getAllDepartments(callback) {
    const departments = await Departments.find({});
    console.log(departments)
    if (departments!=null){
        return callback(null,departments);
    }
    else{
        return callback({
            message: "Did not able to find users"
        });
    }
};

async function register(params, callback) {
    if (params.userName === undefined){
        return callback({ message: "Username required" });
    }
    if (params.department === undefined){
        return callback({ message: "department required" });
    }
    if (params.email === undefined){
        return callback({ message: "email required" });
    }
    if (params.password === undefined){
        return callback({ message: "password required" });
    }
    if (params.role === undefined){
        return callback({ message: "role required" });
    }
    if (params.userId === undefined){
        return callback({ message: "Registration Id required" });
    }
    if (params.userName === undefined){
        return callback({ message: "userName required" });
    }

    const user = new User(params);
    user.save()
    .then((response) => {
        return callback(null, response);
    })
    .catch((error)=>{
        return callback(error);
    });
}

module.exports = {
    login,
    register,
    getAllRoles,
    getAllDepartments
}