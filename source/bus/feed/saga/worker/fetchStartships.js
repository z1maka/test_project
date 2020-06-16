import { put, call, delay } from 'redux-saga/effects';

import { feedActions } from '../../actions';

export function* fetchStarShips() {
    try {
        yield put(feedActions.startFetch());
        const response = yield call(fetch, 'https://swapi.co/api/starsships');
        const { results } = yield call([response, response.json]);
        if (response.status !== 200) {
            throw new Error("we can't receive starships!");
        }
        yield delay(2000);
        yield put(feedActions.fillStarShips(results));
    } catch (error) {
        console.log('fetchStarShips worker', error);
    } finally {
        yield put(feedActions.stopFetch());
    }
}
