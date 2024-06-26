const AppliedCompanies = require("../models/AppliedCompanies");

exports.dailyTarget = async (req, res) => {
  try {
    const { dailyTarget } = req.body;
    await AppliedCompanies.create({
      dailyTarget: dailyTarget,
      user: req.user.id,
    });

    return res.status(200).json({
      message: "Daily target updated successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.appliedCompaniesData = async (req, res) => {
  try {
    const isoStringPastDay = req.header("isoStringPastDay");
    const isoStringCurrentDay = req.header("isoStringCurrentDay");

    if (!isoStringPastDay || !isoStringCurrentDay) {
      return res.status(401).json({
        success: false,
        message: "Input dates are missing in the request header",
      });
    }

    const data = await AppliedCompanies.find({
      user: req.user.id,
      appliedDate: {
        $gte: isoStringPastDay,
        $lt: isoStringCurrentDay
      },
    });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "No data found for the current date",
      });
    }
    console.log("current date calculated in backend", JSON.stringify(data));

    return res.status(200).json({
      message: "Applied companies data fetched successfully",
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
