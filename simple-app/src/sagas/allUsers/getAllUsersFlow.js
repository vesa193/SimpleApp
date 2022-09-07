import { call, put, take } from 'redux-saga/effects';
import { getAllUsers } from '../../lib/api';
import { getAllUsersRequest, getAllUsersSuccess, getAllUsersFailed } from '../../redux/reducers/users/users';

// getAllUsersFlow saga handler
export function* getAllUsersFlow() {
    while (true) {
        yield take(getAllUsersRequest.type);
        try {
            const response = yield call(getAllUsers);
            yield put(getAllUsersSuccess(response));
        } catch (error) {
            yield put(getAllUsersFailed(error.message));
        }
    }
}
