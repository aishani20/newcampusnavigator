import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupData: null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
    tokenCreationTime: null
};

const authSlice = createSlice({
    name: "auth", // this is used in the redux dev tools
    initialState: initialState,
    reducers: {
        setSignupData: (state,value) => {
            state.signupData = value.payload;
        },
        setLoading: (state,value) => {
            state.loading = value.payload;
        },
        setToken: (state,value) => {
            state.token = value.payload;
        },
        setTokenCreationTime: (state,value) => {
            state.tokenCreationTime = value.payload;
        }
    }
});

export const {setSignupData,setLoading,setToken,setTokenCreationTime} = authSlice.actions;   
export default authSlice.reducer;