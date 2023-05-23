const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const auth = require('./middlewares/auth');
const errors = require('./middlewares/error');

const { unless } = require("express-unless")

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () =>{
        console.log("Database Connected");
    },
    (error) => {
        console.log("Database can't be connected: " + error);
    }
)

auth.authenticateToken.unless = unless;
app.use(
    auth.authenticateToken.unless({
        path: [ 
            { url: "/login", methods: ["POST"]},
            { url: "/register", methods: ["POST"]},
            { url: "/allRoles", methods: ["GET"]},
            { url: "/allDepartments", methods: ["GET"]}
        ],
    })
);

app.use(express.json());

app.use("/", require('./routes/users.routes'));

app.use(errors.errorHandler);

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});


// const mongoString = process.env.DB_URL_LOCAL
// mongoose.connect(mongoString);
// const database = mongoose.connection
// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })