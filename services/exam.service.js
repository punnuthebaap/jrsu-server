const pool = require('../config/db.config');

function createNewExam(params, callback) {
    pool.query(
        `insert into examforms(examId, examName, starting_at, ending_at)value(?,?,?,?)`,
        [
            params.examType,
            params.examName,
            params.startDate,
            params.endDate,
        ],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

function getAllExam(callback) {
    pool.query(
        `SELECT examforms.id,examName,starting_at,ending_at,examType FROM examforms LEFT JOIN examtype ON examforms.examId = examtype.id`,
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

function getAllExamFormByExam(id, callback) {
    pool.query(
        `SELECT * from examapplications where examFormId = ?`,
        [id],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

function checkWhetherApplicationExist(params, callback) {
    pool.query(
        `SELECT * from examapplications where examFormId = ? and studentId = ? and currentSemester = ?`,
        [
            params.examFormId,
            params.studentId,
            params.currentSemester,
        ],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}


function applyForExams(params, callback) {
    pool.query(
        `insert into examapplications(examFormId, studentId, currentSemester, isHodApproved, isAccountsApproved, isExaminationApproved, isBack)value(?,?,?,?,?,?,?)`,
        [
            params.examFormId,
            params.studentId,
            params.currentSemester,
            0,
            0,
            0,
            0
        ],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

module.exports = {
    createNewExam,
    getAllExam,
    getAllExamFormByExam,
    applyForExams,
    checkWhetherApplicationExist
}
