import { all, fork } from 'redux-saga/effects';
import { getAllUsersFlow } from './allUsers/getAllUsersFlow';
import { userLoginFlow } from './auth/userLoginFlow';
import { userLogoutFlow } from './auth/userLogoutFlow';
import { userRegistrateFlow } from './auth/userRegistrateFlow';
import { getRefreshTokenFlow } from './auth/getRefreshTokenFlow';

export default function* rootSaga() {
    yield all([yield fork(userLoginFlow)]);
    yield all([yield fork(userLogoutFlow)]);
    yield all([yield fork(userRegistrateFlow)]);
    yield all([yield fork(getRefreshTokenFlow)]);
    yield all([yield fork(getAllUsersFlow)]);
    // code after all-effect
}
