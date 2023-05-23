const bcrypt = require('bcryptjs');
const userService = require('../services/user.services');

exports.register = (req, res, next)=>{
    const { password } = req.body;
    const salt = bcrypt.genSaltSync(10);

    req.body.password = bcrypt.hashSync(password, salt);

    userService.register(req.body, (error, result) =>{
        if(error){
            return next(error);
        }
        return res.status(200).send({
            message:"success",
            data: result,
        });
    });
};

exports.login = (req, res, next)=>{
    const { userId,password } = req.body;

    userService.login({ userId,password }, (error, result) =>{
        if(error){
            return next(error);
        }
        return res.status(200).send({
            message:"success",
            data: result,
        });
    });
};

exports.userProfile = (req, res, next)=> {
    return res.status(200).json({message: "Authorized User"});
};

exports.getAllRoles = (req, res, next)=>{
    userService.getAllRoles((error,result)=>{
        if(error){
            return next(error);
        }
        return res.status(200).send({
            message:"success",
            data: result,
        });
    });
};

exports.getAllDepartments = (req, res, next)=>{
    userService.getAllDepartments((error,result)=>{
        if(error){
            return next(error);
        }
        return res.status(200).send({
            message:"success",
            data: result,
        });
    });
};
