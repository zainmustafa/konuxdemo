/**
 * @module Epics/NetFlix
 * @desc NetFlix epics
 */

import { Observable } from "rxjs/Observable";
import { fromPromise } from "rxjs/observable/fromPromise";
import { ActionTypes } from "constants/index";
import { apiHelper } from "../utils/apiHelper";
import { showAlert } from "../actions";

export function konuxApiData(action$) {
    return action$
        .ofType(ActionTypes.FETCH_API_DATA)
        .switchMap(() => {
            return fromPromise(apiHelper())
                .flatMap(data =>
                    Observable.of({
                        type: ActionTypes.FETCH_API_DATA_SUCCESS,
                        payload: { data }
                    })
                )
                .catch(errorHandler);
        })
        .catch(errorHandler);
}

const errorHandler = error =>
    Observable.of(
        {
            type: ActionTypes.FETCH_API_DATA_FAILURE,
            payload: { error },
            error: true
        },
        showAlert("API Fetch Error", {
            type: "error",
            icon: "i-flash"
        })
    );
