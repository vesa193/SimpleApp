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
    },
});

// Action creators are generated for each case reducer function
export const { onLoginRequest, onLoginSuccess, onLoginFailed, onLogoutRequest, onLogoutSuccess, onLogoutFailed } =
    userSlice.actions;

export default userSlice.reducer;
