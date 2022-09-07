import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from './reducers/rootReducer';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);
middleware.push(createLogger());

const enhancer = [...middleware];

export default configureStore({
    reducer: rootReducer,
    middleware: enhancer,
});

sagaMiddleware.run(rootSaga);
