const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "student"
    }],
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employe"
    },
    profile: String,
    skills: String,
    jobtype: {
        type: String,
        enum: ["In office", "Remote", "Hybrid"]
    },
    workingtype:{
        type: String,
        enum: ["Full-time", "Part-time"]
    },
    openings: Number,
    description: String,
    preferences: String,
    package: String,
    perks: {
        type: [String], // Change perks to an array of strings
        enum: ["Certificate", "Letter of Recommendation", "Flexible Work Hours", "5 Days a Week", "Informal Dress Code", "Free Snacks & Beverages"] // Define all possible perks
    },
    assements: String,
    company: String,
    location: String,
    experience: String,
    startdate: String,
    start:{
        type: String,
        enum: ["Immediately", "Later"]
    },
    responsibilities: String,
    qualifications: String,
    workconditions: String,
    applicants: Number,
    companyDetail: String,
    contact: String

},
    { timestamps: true }
);

const Job = mongoose.model("job", jobModel);
module.exports = Job;