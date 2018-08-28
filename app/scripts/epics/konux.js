/**
 * @module Epics/NetFlix
 * @desc NetFlix epics
 */

import { Observable } from "rxjs/Observable";

import { ActionTypes } from "constants/index";
import { apiHelper } from "../utils/konux";

export function konuxApiData(action$) {
    return action$.ofType(ActionTypes.FETCH_API_DATA).switchMap(() => {
        fromPromise(apiHelper())
            .flatMap(data =>
                Observable.of({
                    type: ActionTypes.FETCH_API_DATA_SUCCESS,
                    payload: data
                })
            )
            .catch(error =>
                Observable.of(
                    {
                        type: ActionTypes.FETCH_API_DATA_FAILURE,
                        payload: { error },
                        error: true
                    },
                    showAlert("Unable to fetch Data", {
                        type: "error",
                        icon: "i-flash"
                    })
                )
            );
    });
}
