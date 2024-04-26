const User = require("../models/User");

exports.deleteAccount = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    console.log(JSON.stringify(user));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Account deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Unable to delete account. Try again later.",
    });
  }
};
