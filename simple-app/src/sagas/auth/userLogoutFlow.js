import { put, take } from 'redux-saga/effects';
import { onLogoutRequest, onLogoutSuccess, onLogoutFailed } from '../../redux/reducers/user/user';

// userLogoutFlow saga handler
export function* userLogoutFlow() {
    while (true) {
        yield take(onLogoutRequest.type);
        try {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            yield put(onLogoutSuccess(null));
            History.navigate('/', { replace: true });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('e.message', error.message);
            yield put(onLogoutFailed(error.message));
        }
    }
}
