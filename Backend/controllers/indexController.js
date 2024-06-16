const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
// const student = require("../models/studentModel");
const Student = require("../models/studentModel");
const Internship = require("../models/internshipModel");
const Job = require("../models/jobModel");

const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit();

exports.homepage = catchAsyncErrors(async function (req, res, next) {

    res.json({
        message: "secure homepage"
    })
});

exports.currnetUser = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    res.json({ student })
});

exports.studentsignup = catchAsyncErrors(async function (req, res, next) {

    const student = await new Student(req.body).save();
    // res.status(201).json(student)
    sendtoken(student, 201, res);
});

exports.studentsignin = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findOne({ email: req.body.email }).select("+password").exec();

    if (!student) return next(new ErrorHandler("User not found with this email address", 404));

    const isMatch = student.comparepassword(req.body.password);
    if (!isMatch) return next(new ErrorHandler("Wrong Credientials", 500));

    // res.json(student);
    sendtoken(student, 200, res);
});

exports.studentsignout = catchAsyncErrors(async function (req, res, next) {

    // res.clearCookie("token", {
    //     httpOnly: false,
    //     secure: true,
    //     sameSite: 'None',
    //     path: '/', 
    // });

    res.json({ message: "successfully signout!" })
});

exports.studentsendmail = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findOne({ email: req.body.email }).exec();

    if (!student) return next(new ErrorHandler("User not found with this email address", 404));

    // const url = `${req.protocol}://${req.get("host")}/student/forget-link/${student._id}`
    const url = `${req.protocol}://${req.body.currentHost}/student/forget-link/${student._id}`

    sendmail(req, res, next, url);
    student.resetPasswordToken = "1";
    await student.save();

    res.json({ student, url })
});

exports.studentforgetlink = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.params.id).exec();

    if (!student) return next(new ErrorHandler("User not found with this email address", 404));

    if (student.resetPasswordToken == "1") {
        student.resetPasswordToken = "0"
        student.password = req.body.password
        await student.save()
    } else {
        return next(new ErrorHandler("Invalid Reset Password Link! Please try again", 500));
    }
    res.status(200).json({
        message: "password has been successfully changed"
    })
});

exports.studentresetpassword = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    student.password = req.body.password;
    await student.save();
    sendtoken(student, 201, res);
});

exports.studentupdate = catchAsyncErrors(async function (req, res, next) {

    await Student.findByIdAndUpdate(req.params.id, req.body).exec();
    res.status(200).json({
        success: true,
        message: "Student updated successfully!",
    })
});

exports.studentavatar = catchAsyncErrors(async function (req, res, next) {
    const student = await Student.findById(req.params.id).exec();
    const file = req.files.avatar;
    const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(file.name)}`

    if (student.avatar.fileId !== "") {
        await imagekit.deleteFile(student.avatar.fileId);
    }

    const { fileId, url } = await imagekit.upload({
        file: file.data,
        fileName: modifiedFileName,
    })

    student.avatar = { fileId, url };
    await student.save();

    res.status(200).json({
        success: true,
        message: "Profile Updated!"
    })
});


// ---- Apply Internship ----

exports.applyinternship = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const internship = await Internship.findById(req.params.internshipid).exec()

    internship.students.push(student._id);
    await internship.save();
    
    // console.log(internship)
    student.internships.push(internship._id);
    await student.save();

    res.json({ student, internship })
});

exports.singleinternship = catchAsyncErrors(async function (req, res, next) {
    const internship = await Internship.findById(req.params.internshipid).exec();
    res.status(200).json({
        success: true,
        internship
    })
});


// ---- Apply Job ----

exports.applyjob = catchAsyncErrors(async function (req, res, next) {

    const student = await Student.findById(req.id).exec();
    const job = await Job.findById(req.params.jobid).exec()

    student.jobs.push(job._id);
    job.students.push(student._id);

    await student.save();
    await job.save();

    res.json({ student, job })
});

exports.readsinglejob = catchAsyncErrors(async function (req, res, next) {
    const job = await Job.findById(req.params.jobid).exec();
    res.status(200).json({
        success: true,
        job
    })
});


// Apply read all internship

exports.readinternship = catchAsyncErrors(async function (req, res, next) {
    const { internships } = await Student.findById(req.id).populate("internships").exec();
    res.status(200).json({
        success: true,
        internships
    })
});

// Apply read all job

exports.readjob = catchAsyncErrors(async function (req, res, next) {
    const { jobs } = await Student.findById(req.id).populate("jobs").exec();
    res.status(200).json({
        success: true,
        jobs
    })
});


// bookmark internship.................
exports.bookmarkinternship = catchAsyncErrors(async function (req, res, next) {
    const student = await Student.findById(req.id).exec();
    const internship = await Internship.findById(req.params.internshipid).exec()
    student.bookmarkinternship.push(internship._id);

    await student.save();

    res.json({ student, internship })
})

// disbookmark internship.................
exports.disbookmarkinternship = catchAsyncErrors(async function (req, res, next) {
    const student = await Student.findById(req.id).exec();
    const internship = await Internship.findById(req.params.internshipid).exec()

    student.bookmarkinternship = student.bookmarkinternship.filter(id => id.toString() !== req.params.internshipid);

    await student.save();

    res.json({ student, internship })
})
// bookmark job.................
exports.bookmarkjob = catchAsyncErrors(async function (req, res, next) {
    const student = await Student.findById(req.id).exec();
    const job = await Job.findById(req.params.jobid).exec()

    student.bookmarkjob.push(job._id);

    await student.save();

    res.json({ student, job })
})
// disbookmark internship.................
exports.disbookmarkjob = catchAsyncErrors(async function (req, res, next) {
    const student = await Student.findById(req.id).exec();
    const job = await Job.findById(req.params.jobid).exec()

    student.bookmarkjob = student.bookmarkjob.filter(id => id.toString() !== req.params.jobid);
    // console.log(student.bookmarkjob)

    await student.save();

    res.json({ student, job })
})

