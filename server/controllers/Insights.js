const Insights = require("../models/Insights");

exports.createInsight = async (req, res) => {
  try {
    const {
      appliedRole,
      appliedCompany,
      rounds,
      package,
      interviewQuestions,
      interviewProcess,
    } = req.body;

    const {id} = req.user;

    try {
      await Insights.create({
        appliedRole,
        appliedCompany,
        rounds,
        package,
        interviewQuestions,
        interviewProcess,
        user: id,
      });

      res.json({
        success: true,
        message: "Insight created successfully",
      });
    } catch (err) {
      console.error(err);
      console.log("Error in insights creation");
    }
  } catch (error) {
    console.error(error);
    console.log("Error in create insight controller");
  }
};

exports.getAllInsights = async (req, res) => {
    try{
        const {id} = req.user;
        const insights = await Insights.find();
        res.json({
            success:true,
            insights: insights
        })
    }
    catch(err){
        console.error(err);
        console.log("Error in gett all insights controller");
    }
};
