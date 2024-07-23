import { toast } from "react-hot-toast";
import { setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";

const SignoutHandler = (navigate) => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setToken(null));
    dispatch(setUser(null));
    toast.error(
      "You have been signed out due to session timeout. Please sign in again."
    );
    navigate("/login");
    
  };
};

export default SignoutHandler;
