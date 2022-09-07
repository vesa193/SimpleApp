import { all, fork } from 'redux-saga/effects';
import { getAllUsersFlow } from './allUsers/getAllUsersFlow';
import { userLoginFlow } from './auth/userLoginFlow';
import { userLogoutFlow } from './auth/userLogoutFlow';

export default function* rootSaga() {
    yield all([yield fork(userLoginFlow)]);
    yield all([yield fork(userLogoutFlow)]);
    yield all([yield fork(getAllUsersFlow)]);
    // code after all-effect
}
