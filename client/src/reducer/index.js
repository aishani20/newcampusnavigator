import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import darkModeReducer from "../slices/darkModeSlice";
const rootReducer = combineReducers({
    auth: authReducer,
    darkMode: darkModeReducer,
});

export default rootReducer;