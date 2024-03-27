const User = require("../models/User");
const crypto = require("crypto");
const mailSender = require("../utils/mailSender");
const resetPasswordEmail = require("../mail/templates/resetPassword");
require("dotenv").config();
exports.resetPasswordToken = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Please enter your email",
    });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Enter a valid email",
    });
  }

  if (user) {
    const token = crypto.randomBytes(32).toString("hex");
    const resetToken = {
      token: token,
      resetTokenExpires: Date.now() + 3600000,
    };
    user.resetToken = resetToken;
    await user.save();
  }

  const url = `${process.env.CORS_ORIGIN}/reset-password/${user.resetToken.token}`;
  try {
    await mailSender(
      email,
      "Reset Password - CampusNavigator",
      resetPasswordEmail(url)
    );
    return res.json({
      success: true,
      message: "Reset password link has been sent to your email",
    });
  } catch (err) {
    console.error(err);
    console.log(
      "Error in sending the mail via mail sender in reset password token controller"
    );
  }
};
