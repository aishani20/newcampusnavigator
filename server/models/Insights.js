const mongoose = require("mongoose");

const insightsSchema = new mongoose.Schema({
    appliedRole: {
        type: String,
        trim: true,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    appliedCompany: {
        type: String,
        trim: true,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    rounds:{
        type: Number,
        required: true,
    },
    package:{
        type: Number,
        required: true,
    },
    interviewQuestions:{
        type: String,
        required: true,
    },
    interviewProcess:{
        type: String,
        required: true,
    },

})

module.exports = mongoose.model("Insights", insightsSchema);
