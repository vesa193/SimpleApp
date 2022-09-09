import { call, put, take } from 'redux-saga/effects';
import { userLogin } from '../../lib/api';
import { onLoginFailed, onLoginRequest, onLoginSuccess } from '../../redux/reducers/user/user';

// userLoginFlow saga handler
export function* userLoginFlow() {
    while (true) {
        const { payload } = yield take(onLoginRequest.type);
        const navigateTo = History.state?.from?.pathname || '/dashboard';

        try {
            const response = yield call(userLogin, payload.formData);

            if (response?.accessToken) {
                localStorage.setItem('accessToken', response?.accessToken);
                localStorage.setItem('refreshToken', response?.refreshToken);
                yield put(onLoginSuccess(response));
                // payload.cb('/dashboard');
                // eslint-disable-next-line no-console
                console.log('STATE', History.state);
                History.navigate(navigateTo, { replace: true });
            }

            if (!response?.accessToken && (response?.message || response?.response?.data?.message)) {
                const errorMessage = response?.response?.data?.message || response?.message;
                yield put(onLoginFailed(errorMessage));
                // payload.cb('/');
                History.navigate('/', { replace: true });
            }
        } catch (error) {
            const { response } = error;
            localStorage.clear();
            yield put(onLoginFailed(response?.data?.message));
            // payload.cb('/');
            History.navigate('/', { replace: true });
        }
    }
}
