import { all, fork } from 'redux-saga/effects';
import { getAllUsersFlow } from './allUsers/getAllUsersFlow';
import { userLoginFlow } from './auth/userLoginFlow';
import { userLogoutFlow } from './auth/userLogoutFlow';
import { userRegistrateFlow } from './auth/userRegistrateFlow';
import { getRefreshTokenFlow } from './auth/getRefreshTokenFlow';
import { getUserProfileFlow } from './profile/getUserProfileFlow';

export default function* rootSaga() {
    yield all([yield fork(userLoginFlow)]);
    yield all([yield fork(userLogoutFlow)]);
    yield all([yield fork(userRegistrateFlow)]);
    yield all([yield fork(getRefreshTokenFlow)]);
    yield all([yield fork(getAllUsersFlow)]);
    yield all([yield fork(getUserProfileFlow)]);
    // code after all-effect
}
