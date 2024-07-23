import { setToken, setTokenCreationTime } from "../slices/authSlice";
import { setUser } from "../slices/profileSlice";

const TokenExpiryHandler = (currentTime,dispatch,tokenCreationTime,token) => {

  if (!token) {
    return;
  }
  const pastTime = tokenCreationTime;
  console.log("PastDae",pastTime);

  const totalLoggedTime = currentTime - pastTime;

  const expiryTime = 24*60*60*1000; // 24 hours in milliseconds

  if (totalLoggedTime >= expiryTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setToken(null));
    dispatch(setTokenCreationTime(null));
    dispatch(setUser(null));
  }
};

export default TokenExpiryHandler;
