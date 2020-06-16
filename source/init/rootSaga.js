import { all, call } from 'redux-saga/effects';
import { watchFeed } from '../bus/feed/saga/watchers';

export function* rootSaga() {
    yield all([call(watchFeed)]);
}
