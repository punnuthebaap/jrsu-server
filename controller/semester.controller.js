const semesterService = require('../services/semester.services');

exports.getAllSemesterForCourse = (req, res, next)=>{
    console.log(req)
    semesterService.getAllSemesterForCourse(req.body.deptId, (error,result)=>{
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

