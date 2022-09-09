import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        errorMessage: '',
    },
    reducers: {
        onLoginRequest: (state) => {
            state.isLoading = true;
        },
        onLoginSuccess: (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        },
        onLoginFailed: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        onLogoutRequest: (state) => {
            state.isLoading = true;
        },
        onLogoutSuccess: (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        },
        onLogoutFailed: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        onRegisterRequest: (state) => {
            state.isLoading = true;
        },
        onRegisterSuccess: (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        },
        onRegisterFailed: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        getRefreshTokenRequest: (state) => {
            state.isLoading = true;
        },
        getRefreshTokenSuccess: (state, action) => {
            state.isLoading = false;
            state.userData.accessToken = action.payload;
        },
        getRefreshTokenFailed: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
        getUserProfileRequest: (state) => {
            state.isLoading = true;
        },
        getUserProfileSuccess: (state, action) => {
            // eslint-disable-next-line no-console
            console.log('ACTION', action);
            state.isLoading = false;
            state.userData = action.payload;
        },
        getUserProfileFailed: (state, action) => {
            state.errorMessage = action.payload;
            state.isLoading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    onLoginRequest,
    onLoginSuccess,
    onLoginFailed,
    onLogoutRequest,
    onLogoutSuccess,
    onLogoutFailed,
    onRegisterRequest,
    onRegisterSuccess,
    onRegisterFailed,
    getRefreshTokenRequest,
    getRefreshTokenSuccess,
    getRefreshTokenFailed,
    getUserProfileRequest,
    getUserProfileSuccess,
    getUserProfileFailed,
} = userSlice.actions;

export default userSlice.reducer;
