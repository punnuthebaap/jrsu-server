const bcrypt = require('bcryptjs');
const userService = require('../services/user.services');
const auth = require('../middlewares/auth');

exports.register = (req, res, next)=>{
    userService.getUserByRegId(req.body.regId, (error, result) =>{
        if (!result){
            const { password } = req.body;
            const salt = bcrypt.genSaltSync(10);

            req.body.password = bcrypt.hashSync(password, salt);

            userService.register(req.body, (error, result) =>{
                if(error){
                    return next(error);
                }
                
                if(req.body.role == 7){
                    userService.saveStudentOnRegister(req.body.currentSemester, result.insertId, (error, result) => {
                        if(error){
                            return next(error);
                        }
                    });
                }
                return res.status(200).send({
                    message:"success",
                    data: result,
                });
            });
        }
        else{
            return res.status(500).send({
                error : 1,
                message:"Registration Id already in use"
            });
        }
    });
};

exports.login = (req, res, next)=>{
    userService.getUserByRegId(req.body.regId, (error, result) =>{
        if(error){
            return next(error);
        }
        if (result){
            console.log(bcrypt.compareSync(req.body.password, result.password))
           if(bcrypt.compareSync(req.body.password, result.password)){
            const token = auth.generateAccessToken(result.regId);
            console.log(token)
            return res.status(200).send({
                error : 0,
                message:"success",
                data: result,
                token: token
            });
           }
           return res.status(500).send({
               error : 1,
               message:"Invalid username and password"
           });
        }
        else{
            return res.status(500).send({
                error : 1,
                message:"Invalid username and password"
            });
        }
    });
};

exports.userProfile = (req, res, next)=> {
    return res.status(200).json({message: "Authorized User"});
};

exports.getAllRoles = (req, res, next)=>{
    userService.getAllRoles((error,result)=>{
        console.log(error)
        if(error){
            return next(error);
        }
        return res.status(200).send({
            error: 0,
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
            error: 0,
            message:"success",
            data: result,
        });
    });
};
