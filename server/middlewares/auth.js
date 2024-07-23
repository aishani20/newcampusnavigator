require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.auth = async (req, res, next) => {
  try {
    const tokenHeader = req.header("Authorisation");
    if (!tokenHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header is missing",
      });
    }
    const tokenArray = tokenHeader.split(" ");
    if (tokenArray.length !== 2 || tokenArray[0] !== "Bearer") {
      return res.status(401).json({
        success: false,
        message: "Invalid token format",
      });
    }
    const token = tokenArray[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      const {id} = decoded;

      const user = await User.findById(id);
      // console.log("user details from token",user);
      // Add validation to check if user with this id exists or not
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Unauthorised access",
        });
      }
      
      next();
    } catch (error) {
      console.error(error);
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({
          success: false,
          message: "Token has expired",
        });
      }
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Error in the auth middleware",
    });
  }
};
