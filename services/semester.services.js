const pool = require('../config/db.config');

function getAllSemesterForCourse(deptId, callback){
     pool.query(
        `select * from semesters where deptId = ?`,
        [deptId],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

module.exports = {
    getAllSemesterForCourse
}