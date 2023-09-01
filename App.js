const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const auth = require('./middlewares/auth');
const errors = require('./middlewares/error');

const { unless } = require("express-unless")

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.db,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(
//     () =>{
//         console.log("Database Connected");
//     },
//     (error) => {
//         console.log("Database can't be connected: " + error);
//     }
// )
app.use(cors({
    origin: '*'
}));
auth.authenticateToken.unless = unless;
app.use(
    auth.authenticateToken.unless({
        path: [ 
            { url: "/login", methods: ["POST"]},
            { url: "/register", methods: ["POST"]},
            { url: "/allRoles", methods: ["GET"]},
            { url: "/allDepartments", methods: ["GET"]},
            { url: "/getAllcourse", methods: ["GET"]},
            { url: "/getAllSemesterForCourse", methods: ["POST"]},
        ],
    })
);

app.use(express.json());

app.use("/", require('./routes/users.routes'));
app.use("/", require('./routes/course.routes'));
app.use("/", require('./routes/semester.routes'));
app.use("/", require('./routes/generalApi.routes'));
app.use("/", require('./routes/exam.route'));

app.use(errors.errorHandler);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});
