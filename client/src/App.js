import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import Predict from "./pages/Predict";
import { VerifyEmail } from "./pages/VerifyEmail";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import UserProfile from "./pages/settings/Profile";
import Academics from "./pages/Academics";
import ProgrammingBooks from "./components/core/Academics/ProgrammingBooks";
import QuestionPaper from "./components/core/Academics/QuestionPaper";
import Notes from "./components/core/Academics/Notes";
import SemesterBooks from "./components/core/Academics/SemesterBooks";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import axios from "axios";
import TopHeader from "./components/common/TopHeader";
import CNAssistant from "./components/AiChatBot/CNAssistant";
import Settings from "./pages/settings/Settings";
import Profile from "./pages/settings/Profile";
import ChangePassword from "./pages/settings/ChangePassword";
import Help from "./pages/settings/Help";
import AccountDeactivation from "./pages/settings/AccountDeactivation";
import Tracker from "./pages/Tracker";
import AppliedCompanies from "./components/core/tracker/AppliedCompanies/AppliedCompanies";

function App() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((res) => console.log("Response from main backend",res))
      .catch((err) => console.log("Error in th main backend",err));

    axios
      .get(`${process.env.REACT_APP_PREDICTION_MODEL_BACKEND_URL}/home`)
      .then((res) => console.log("Response from the model backend",res))
      .catch((err) => console.log("Error in the model backend",err));
  }, []);
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#111213]">
      <div className="bg-gray-100 mb-1 dark:bg-[#151618]">
        <TopHeader />
      </div>
      <div className="mx-auto px-4 lg:px-6 xl:px-8 max-w-screen-xl w-full">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <OpenRoute>
                <ResetPassword />
              </OpenRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
          <Route
            path="/verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />
          <Route
            path="/predict"
            element={
              <PrivateRoute>
                <Predict />
              </PrivateRoute>
            }
          />
          <Route
            path="/insights"
            element={
              <PrivateRoute>
                <Insights />
              </PrivateRoute>
            }
          />

          <Route
            path="/abtyagi15"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute>
                <Tracker />
              </PrivateRoute>
            }
          >
            <Route path="applied-companies" element={<AppliedCompanies />} />
          </Route>

          <Route
            path="/academics"
            element={
              <PrivateRoute>
                <Academics />
              </PrivateRoute>
            }
          />
          <Route
            path="/academics/programming-books"
            element={
              <PrivateRoute>
                <ProgrammingBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="/academics/pyq"
            element={
              <PrivateRoute>
                <QuestionPaper />
              </PrivateRoute>
            }
          />
          <Route
            path="/academics/notes"
            element={
              <PrivateRoute>
                <Notes />
              </PrivateRoute>
            }
          />
          <Route
            path="/academics/semester-books"
            element={
              <PrivateRoute>
                <SemesterBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          >
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="help" element={<Help />} />
            <Route
              path="account-deactivation"
              element={<AccountDeactivation />}
            />
          </Route>
        </Routes>
        <CNAssistant />
        <Footer />
      </div>
    </div>
  );
}

export default App;
