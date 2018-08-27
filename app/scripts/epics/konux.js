/**
 * @module Epics/NetFlix
 * @desc NetFlix epics
 */

import { Observable } from "rxjs/Observable";

import { ActionTypes } from "constants/index";

export function getApiData(action$, state) {
    return action$
        .ofType(ActionTypes.ADD_TO_PLAYLIST_REQUEST)
        .switchMap((data) =>{
            const arr = state.getState().netflix.playlist;

            if(arr.filter(vendor => vendor.name === data.payload.name).length === 0)
                arr.push(data.payload);

            return Observable.of({
                type: ActionTypes.ADD_TO_PLAYLIST_SUCCESS,
                payload : {arr, length : arr.length}
            })
        }
        ).catch(error => [
            {
                type: ActionTypes.ADD_TO_PLAYLIST_FAILURE,
                payload: {
                    message: error.message,
                    status: error.status
                },
                error: true
            }
        ]);
}
