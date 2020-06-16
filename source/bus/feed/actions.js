import { types } from './types';

export const feedActions = {
    // Sync
    startFetch: () => {
        return { type: types.START_FETCHING };
    },
    stopFetch: () => {
        return { type: types.STOP_FETCHING };
    },
    fillStarShips: (starships) => {
        return { type: types.FILL_STARSHIPS, payload: starships };
    },
    // Async
    fetchStarShipsAsync: () => {
        return { type: types.FETCH_STARSHIPS_ASYNC };
    },
};
