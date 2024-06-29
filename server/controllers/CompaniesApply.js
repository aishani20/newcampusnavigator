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
    const {upperDate, lowerDate} = req.query;
    const isoStringLowerLimitDate = lowerDate;
    const isoStringUpperLimitDate = upperDate;

    if (!isoStringLowerLimitDate || !isoStringUpperLimitDate) {
      return res.status(401).json({
        success: false,
        message: "Input dates are missing in the request header",
      });
    }

    const details = await AppliedCompanies.find({
      user: req.user.id,
      appliedDate: {
        $gte: isoStringLowerLimitDate,
        $lt: isoStringUpperLimitDate,
      },
    });
    if (!details) {
      return res.status(401).json({
        success: false,
        message: "No data found for the current date",
      });
    }
    console.log(
      "current date calculated in backend",
      isoStringLowerLimitDate,
      isoStringUpperLimitDate
    );
    console.log(details);

    return res.status(200).json({
      message: "Applied companies data fetched successfully",
      companyData: details,
    });
  } catch (err) {
    console.log(err);
  }
};


exports.extensionData = async (req, res) => {
  try {
    const { appliedCompany,appliedRole,location } = req.body;
    await AppliedCompanies.create({
      appliedCompany: appliedCompany,
      appliedRole: appliedRole,
      location: location,
      user: req.user.id
    });

    return res.status(200).json({
      success: true,
      message: "Company data added successfully",
    });
  } catch (err) {
    console.log(err);
  }
};