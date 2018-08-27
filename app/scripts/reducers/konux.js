/**
 * @module Reducers/Konux
 * @desc Konux Reducer
 */
import immutable from "immutability-helper";
import { createReducer } from "modules/helpers";
// import { parseError } from "modules/client";

import { ActionTypes } from "constants/index";

export const konuxState = {
    playlist: [],
    isLoading : false,
};

export default {
    konux: createReducer(konuxState, {
        [ActionTypes.ADD_TO_PLAYLIST_REQUEST](state) {
            return immutable(state, {
                isLoading: { $set: true }
            });
        },
        [ActionTypes.ADD_TO_PLAYLIST_SUCCESS](state, { payload }) {
            return immutable(state, {
                playlist: { $set: payload.arr },
                isLoading: { $set: false }
            });
        },
        [ActionTypes.ADD_TO_PLAYLIST_FAILURE](state) {
            return immutable(state, {
                isLoading: { $set: true }
            });
        }
    })
};
