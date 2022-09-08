import { call, put, take } from 'redux-saga/effects';
import { userRegister } from '../../lib/api';
import { onRegisterRequest, onRegisterSuccess, onRegisterFailed } from '../../redux/reducers/user/user';

// userRegistrateFlow saga handler
export function* userRegistrateFlow() {
    while (true) {
        const { payload } = yield take(onRegisterRequest.type);

        try {
            const response = yield call(userRegister, payload.formData);

            if (response?.accessToken) {
                localStorage.setItem('accessToken', response?.accessToken);
                localStorage.setItem('refreshToken', response?.refreshToken);
                yield put(onRegisterSuccess(response));
                payload.cb('/dashboard');
            }

            if (!response?.accessToken && (response?.message || response?.response?.data?.message)) {
                const errorMessage = response?.response?.data?.message || response?.message;
                yield put(onRegisterFailed(errorMessage));
                payload.cb('/register');
            }
        } catch (error) {
            const { response } = error;
            localStorage.clear();
            yield put(onRegisterFailed(response?.data?.message));
            payload.cb('/register');
        }
    }
}
