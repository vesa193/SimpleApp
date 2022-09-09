import { call, put, take } from 'redux-saga/effects';
import { getProfile } from '../../lib/api';
import { getUserProfileRequest, getUserProfileSuccess, getUserProfileFailed } from '../../redux/reducers/user/user';

// getUserProfileFlow saga handler
export function* getUserProfileFlow() {
    while (true) {
        yield take(getUserProfileRequest.type);
        try {
            const response = yield call(getProfile);
            // eslint-disable-next-line no-console
            console.log('RRESPPOOO', response);
            yield put(getUserProfileSuccess(response));
        } catch (error) {
            yield put(getUserProfileFailed(error.message));
        }
    }
}
