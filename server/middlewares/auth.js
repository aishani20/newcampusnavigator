require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    console.log("Before token authorisation");

    const {token} = req.cookies
    //   req.cookies.token ||
    //   req.body.token ||
    //   req.header("Authorisation").replace("Bearer ", "");
    // console.log("Token extraction");
    
    if (!token) {
      res.json({
        success: false,
        message: "Token is missing",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
      console.error(e);
      res.status(500).json({
        status: false,
        message: "Token is invalid or has expired",
      });
    }
    next();
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Error in the auth middleware",
    });
  }
};
