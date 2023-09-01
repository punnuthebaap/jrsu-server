const examService = require('../services/exam.service');

exports.createNewExam = (req, res, next)=>{
    examService.createNewExam(req.body, (error,result)=>{
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

exports.getAllExam = (req, res, next)=>{
    examService.getAllExam( (error,result)=>{
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

exports.getAllExamFormByExam = (req, res, next)=>{
    examService.getAllExamFormByExam(req.body.id, (error,result)=>{
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

exports.applyForExams = (req, res, next)=>{
    examService.applyForExams(req.body, (error,result)=>{
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

exports.checkWhetherApplicationExist = (req, res, next)=>{
    examService.checkWhetherApplicationExist(req.body, (error,result)=>{
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