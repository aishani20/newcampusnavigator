const AppliedCompanies = require("../models/AppliedCompanies");

exports.dailyTarget = async (req, res) => {
    try{
        const { dailyTarget } = req.body;
        await AppliedCompanies.create({dailyTarget: dailyTarget, user: req.user.id });

        res.status(200).json({
            message: "Daily target updated successfully",
        });
    }
    catch(err){
        console.log(err);
    }
};