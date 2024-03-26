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

function App() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden">
      <div className="xl:w-[1200px] lg:w-[1000px] mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
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
            path="/home"
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
