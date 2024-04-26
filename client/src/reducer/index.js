import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import darkModeReducer from "../slices/darkModeSlice";
import profileReducer from "../slices/profileSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    darkMode: darkModeReducer,
    profile: profileReducer,
});

export default rootReducer;