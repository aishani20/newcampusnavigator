import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const InsightsForm = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    appliedRole: "",
    appliedCompany: "",
    rounds: "",
    package: "",
    interviewQuestions: "",
    interviewProcess: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("Handle change", formData);
  };

  async function submitHandler(event) {
    try {
      console.log(formData);
      const response = await fetch(`${backendUrl}/createInsight`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      navigate("/insights");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex mx-auto justify-center bg-white  p-9">
      <form className="border p-12">
        <div>
          <label>
            Applied Role:
            <input
              className="border m-1"
              type="text"
              name="appliedRole"
              value={formData.appliedRole}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Applied Company:
            <input
              className="border m-1"
              type="text"
              name="appliedCompany"
              value={formData.appliedCompany}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Rounds:
            <input
              className="border m-1"
              type="number"
              name="rounds"
              value={formData.rounds}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Package:
            <input
              className="border m-1"
              type="number"
              name="package"
              value={formData.package}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Interview Questions:
            <input
              className="border m-1"
              type="text"
              name="interviewQuestions"
              value={formData.interviewQuestions}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Interview Process:
            <input
              className="border m-1"
              type="text"
              name="interviewProcess"
              value={formData.interviewProcess}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button className="border bg-slate-200" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsightsForm;
