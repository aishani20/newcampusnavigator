require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const tokenArray = req.header("token").split(" ");

    console.log("Token array ", tokenArray);

    const token = tokenArray[1];
    console.log("Token ", token);
    //  ||
    // req.cookies.token ||
    // req.cookies.token ||
    // req.body.token;
    
    console.log(typeof(token));

    if (!token) {
      return res.json({
        success: false,
        message: "Token is missing",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Checking decoded val",decoded);
      req.user = decoded;
      next();
    } catch (e) {
      console.error(e);
      res.status(500).json({
        status: false,
        message: "Token is invalid or has expired",
      });
    }
    
  } catch (e) {
    console.error(e);
    res.status(500).json({
      status: false,
      message: "Error in the auth middleware",
    });
  }
};
