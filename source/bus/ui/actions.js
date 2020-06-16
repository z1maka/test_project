import { types } from './types';
export const uiActions = {
    startFetching() {
        return { type: types.START_FETCHING };
    },
    stopFetching() {
        return { type: types.STOP_FETCHING };
    },
    emitError(err, meta) {
        return {
            type: types.EMIT_ERROR,
            message: err,
            error: true,
            meta,
        };
    },
};
