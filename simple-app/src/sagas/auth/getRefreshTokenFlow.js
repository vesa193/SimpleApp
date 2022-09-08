import { call, put, take } from 'redux-saga/effects';
import { userRefreshToken } from '../../lib/api';
import { getRefreshTokenRequest, getRefreshTokenSuccess, getRefreshTokenFailed } from '../../redux/reducers/user/user';

// getRefreshTokenFlow saga handler
export function* getRefreshTokenFlow() {
    while (true) {
        const { payload } = yield take(getRefreshTokenRequest.type);

        try {
            const response = yield call(userRefreshToken, payload);

            if (response?.accessToken) {
                localStorage.setItem('accessToken', response?.accessToken);
                yield put(getRefreshTokenSuccess(response?.accessToken));
            }

            if (!response?.accessToken && (response?.message || response?.response?.data?.message)) {
                const errorMessage = response?.response?.data?.message || response?.message;
                yield put(getRefreshTokenFailed(errorMessage));
            }
        } catch (error) {
            const { response } = error;
            localStorage.clear();
            yield put(getRefreshTokenFailed(response?.data?.message));
            payload.cb('/');
        }
    }
}
