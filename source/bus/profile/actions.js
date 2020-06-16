import { types } from './types';

export const profileActions = {
    // Sync
    fillProfile: (profile) => {
        return { type: types.FILL_PROFILE, payload: profile };
    },
    startFetch: () => {
        return { type: types.START_FETCHING };
    },
    stopFetch: () => {
        return { type: types.STOP_FETCHING };
    },
};
