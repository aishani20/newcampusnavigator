const AppliedCompanies = require("../models/AppliedCompanies");

exports.dailyTarget = async (req, res) => {
  try {
    const { dailyTarget } = req.body;
    await AppliedCompanies.create({
      dailyTarget: dailyTarget,
      user: req.user.id,
    });

    res.status(200).json({
      message: "Daily target updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.appliedCompaniesData = async (req, res) => {
  try {
    const { currentDate } = req.headers;
    const data = await AppliedCompanies.find({
      user: req.user.id && appliedDate < currentDate,
    });
    console.log("current date", currentDate);
    console.log("current date calculated in backend", Date.now());
    console.log("data", data);

    res.status(200).json({
      message: "Applied companies data fetched successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
