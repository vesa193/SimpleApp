import { combineReducers } from 'redux';
import userReducer from './user/user';
import usersReducer from './users/users';

export const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
});
