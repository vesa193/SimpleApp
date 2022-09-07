import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: {},
        errorMessage: '',
    },
    reducers: {
        getAllUsersRequest: (state) => {
            state.isLoading = true;
        },
        getAllUsersSuccess: (state, action) => {
            state.isLoading = false;
            state.usersList = action.payload;
        },
        getAllUsersFailed: (state, action) => {
            state.errorMessage = action.payload.message;
            state.isLoading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getAllUsersRequest, getAllUsersSuccess, getAllUsersFailed } = usersSlice.actions;

export default usersSlice.reducer;
