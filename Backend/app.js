require("dotenv").config({path: "./.env"})
const express = require("express")
const app = express()
const cors = require('cors')

// use cors middleware

app.use(
    cors({
        origin: "https://job-app-hirer.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
        credentials: true,
    })
);

// database connectivity
require("./models/db").connectDatabase();

//logger
const logger = require("morgan")
app.use(logger("tiny"))

// body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// session and cookie
const session = require("express-session")
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
}))

const cookieparser = require("cookie-parser")
app.use(cookieparser())

// fileuploader
const fileupload = require("express-fileupload")
app.use(fileupload());

// routes
app.use((err, req, res, next) => {
    res.status(1000).send("backend is running")
})
app.use("/api/user", require("./routes/indexRoutes"))
app.use("/api/resume", require("./routes/resumeRoutes"))
app.use("/api/employe", require("./routes/employeRoutes"))

// error handling
const ErrorHandler = require("./utils/ErrorHandler")
const { generatedError } = require("./middlewares/error")
app.all("*", function(req, res, next){
    next(new ErrorHandler(`Requested URL not found ${req.url}`, 404));
})

app.use(generatedError)

app.listen(process.env.PORT,console.log(`Server running on port ${process.env.PORT}`))