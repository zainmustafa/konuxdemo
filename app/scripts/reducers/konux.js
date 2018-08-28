/**
 * @module Reducers/Konux
 * @desc Konux Reducer
 */
import immutable from "immutability-helper";
import { createReducer } from "modules/helpers";

import { ActionTypes } from "constants/index";

export const konuxState = {
    values: [],
    isLoading: false
};

export default {
    konux: createReducer(konuxState, {
        [ActionTypes.FETCH_API_DATA](state) {
            return immutable(state, {
                isLoading: { $set: true }
            });
        },
        [ActionTypes.FETCH_API_DATA_SUCCESS](state, { payload }) {
            let values = payload.data.values.sort(
                (a, b) => new Date(a.x) - new Date(b.x)
            );
            return immutable(state, {
                values: { $set: values },
                isLoading: { $set: false }
            });
        },
        [ActionTypes.FETCH_API_DATA_FAILURE](state) {
            return immutable(state, {
                isLoading: { $set: true }
            });
        }
    })
};
