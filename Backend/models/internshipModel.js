const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student"
        }
    ],
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employe"
    },
    profile: String,
    skills: String,
    internshiptype: {
        type: String,
        enum: ["In office", "Remote"]
    },
    workingtype: {
        type: String,
        enum: ["Full-time", "Part-time"]
    },
    startdate: {
        type: String,
        enum: ["Immediately", "Later"]
    },
    openings: Number,
    from: String,
    to: String,
    duration: String,
    responsibility: String,
    stipend: {
        status: {
            type: String,
            enum: ["Fixed", "Negotiable", "Performance based", "Unpaid"]
        },
        amount: Number,
    },

    perks: {
        type: [String], // Change perks to an array of strings
        enum: ["Certificate", "Letter of Recommendation", "Flexible Work Hours", "5 Days a Week", "Informal Dress Code", "Free Snacks & Beverages"] // Define all possible perks
    },
    assessments: String,
    location: String,
    company: String,
    applicants: String,
    description: String,
    qualifications: String,
    workconditions: String,
    companyDetail: String,
    contact: String


},
    { timestamps: true }
);

const Internship = mongoose.model("internship", internshipModel);
module.exports = Internship;