// Core
import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { types } from '../types';
// Workers
import { fetchStarShips } from './worker';

function* watchFetchStarships() {
    yield takeEvery(types.FETCH_STARSHIPS_ASYNC, fetchStarShips);
}

export function* watchFeed() {
    yield all([call(watchFetchStarships)]);
}
