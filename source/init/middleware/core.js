import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action: () => '#149945',
        nextState: () => '#A47104',
        error: () => '#ff0005',
    },
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (__DEV__) {
    middleware.push(logger);
}

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = __DEV__ && devtools ? devtools : compose;

const enhancedStore = composeEnhancer(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
