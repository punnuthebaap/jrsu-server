const courseService = require('../services/course.services');

exports.getAllCourse = (req, res, next)=>{
    courseService.getAllCourses((error,result)=>{
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

