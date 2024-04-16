import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Signup } from "./pages/Signup";
import Predict from "./pages/Predict";
import { VerifyEmail } from "./pages/VerifyEmail";
import UserHome from "./pages/UserHome";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import UserProfile from "./pages/UserProfile";
import Academics from "./pages/Academics";
import ProgrammingBooks from "./components/core/Academics/ProgrammingBooks";
import QuestionPaper from "./components/core/Academics/QuestionPaper";
import Notes from "./components/core/Academics/Notes";
import SemesterBooks from "./components/core/Academics/SemesterBooks";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      axios.get(`${process.env.REACT_APP_PREDICTION_MODEL_BACKEND_URL}/home`)
      .then((res)=>console.log("res"))
      .catch((err)=>console.log(err))
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
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
                <UserHome />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
