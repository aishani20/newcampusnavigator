const mongoose = require("mongoose");

const appliedCompaniesSchema = new mongoose.Schema({
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