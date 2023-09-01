const generalApiService = require('../services/generalApi.services');

exports.getDeptById = (req, res, next)=>{
    generalApiService.getDeptById(req.body.id, (error,result)=>{
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

exports.getRoleById = (req, res, next)=>{
    generalApiService.getRoleById(req.body.id, (error,result)=>{
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

exports.getCurrentSemester = (req, res, next)=>{
    generalApiService.getCurrentSemester(req.body.id, (error,result)=>{
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

exports.getSemesterName = (req, res, next)=>{
    generalApiService.getSemesterName(req.body.id, (error,result)=>{
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

exports.getTotalSubjectsByCourse = (req, res, next)=>{
    generalApiService.getTotalSubjectsByCourse(req.body.id, (error,result)=>{
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

exports.getUserCount = (req, res, next)=>{
    generalApiService.getUserCount((error,result)=>{
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

exports.getExamFormCount = (req, res, next)=>{
    generalApiService.getExamFormCount((error,result)=>{
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

exports.getCoursesCount = (req, res, next)=>{
    generalApiService.getCoursesCount((error,result)=>{
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