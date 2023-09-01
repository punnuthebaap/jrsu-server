const pool = require('../config/db.config');

function getDeptById(id, callback){
     pool.query(
        `select * from departments where id = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

function getRoleById(id, callback){
    pool.query(
       `select * from roles where id = ?`,
       [id],
       (error, results, fields) => {
           if (error) {
               callback(error);
           }
           return callback(null,results);
       }
   );
}

function getCurrentSemester(id, callback){
    pool.query(
       `select * from student where userId = ?`,
       [id],
       (error, results, fields) => {
           if (error) {
               callback(error);
           }
           return callback(null,results);
       }
   );
}
function getSemesterName(id, callback){
    pool.query(
        `select * from semesters where id = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

function getTotalSubjectsByCourse(id, callback){
    pool.query(
        `select * from subjects where semesterId = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

function getUserCount(callback){
    pool.query(
       `select * from users`,
       (error, results, fields) => {
           if (error) {
               callback(error);
           }
           return callback(null,results);
       }
   );
}

function getExamFormCount(callback){
    pool.query(
       `select * from examforms`,
       (error, results, fields) => {
           if (error) {
               callback(error);
           }
           return callback(null,results);
       }
   );
}

function getCoursesCount(callback){
    pool.query(
       `select * from departments where isCourse=1`,
       (error, results, fields) => {
           if (error) {
               callback(error);
           }
           return callback(null,results);
       }
   );
}



module.exports = {
    getDeptById,
    getRoleById,
    getUserCount,
    getExamFormCount,
    getCoursesCount,
    getCurrentSemester,
    getSemesterName,
    getTotalSubjectsByCourse
}