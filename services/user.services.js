const bcrypt = require('bcryptjs');
const pool = require('../config/db.config');

function getUserByRegId(regId, callback){
    pool.query(
        `select * from users where regId = ?`,
        [regId],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results[0]);
        }
    );
}

function getAllRoles(callback) {
    pool.query(
        `select * from roles`,
        [],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
};

function getAllDepartments(callback) {
    pool.query(
        `select * from departments`,
        [],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
};

function register(params, callback) {
    pool.query(
        `insert into users(regId, email, password, role, department, isVerified)value(?,?,?,?,?,?)`,
        [
            params.regId,
            params.email,
            params.password,
            params.role,
            params.department,
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

function saveStudentOnRegister(data, userId, callback){
    pool.query(
        `insert into student(currentSemester, userId)value(?,?)`,
        [
            data,
            userId,
        ],
        (error, results, fields) => {
            console.log(error,results)
            if (error) {
                callback(error);
            }
            return callback(null,results);
        }
    );
}

module.exports = {
    register,
    getAllRoles,
    getAllDepartments,
    getUserByRegId,
    saveStudentOnRegister
}