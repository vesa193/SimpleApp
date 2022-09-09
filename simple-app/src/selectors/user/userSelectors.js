import { createSelector } from '@reduxjs/toolkit';

const userAccessTokenSelector = createSelector(
    (state) => state.user.userData,
    (userData) => userData?.accessToken
);

export { userAccessTokenSelector };
