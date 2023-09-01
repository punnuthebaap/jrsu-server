const pool = require('../config/db.config');

function getAllCourses(callback){
     pool.query(
        `select * from departments where isCourse = ?`,
        [1],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

module.exports = {
    getAllCourses
}