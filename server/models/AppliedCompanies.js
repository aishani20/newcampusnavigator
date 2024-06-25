const mongoose = require("mongoose");

const appliedCompaniesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    companyName: {
        type: String,
        trim: true  
    },
    jobTitle: {
        type: String,
        trim: true
    },
    appliedDate: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model("AppliedCompanies", appliedCompaniesSchema);