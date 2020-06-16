// Core
import { createStore } from 'redux';
import { enhancedStore, sagaMiddleware } from './middleware/core';
// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const store = createStore(rootReducer, enhancedStore);
sagaMiddleware.run(rootSaga);
