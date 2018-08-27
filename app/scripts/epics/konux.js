/**
 * @module Epics/NetFlix
 * @desc NetFlix epics
 */

import { Observable } from "rxjs/Observable";

import { ActionTypes } from "constants/index";
import { apiHelper } from "../utils/konux";

export function getApiData(action$) {
    return action$.ofType(ActionTypes.ADD_TO_PLAYLIST_REQUEST).switchMap(() => {
        fromPromise(apiHelper())
            .flatMap(data =>
                Observable.of({
                    type: ActionTypes.CHOOSE_SPORT_SUCCESS,
                    payload: data
                })
            )
            .catch(error =>
                Observable.of(
                    {
                        type: ActionTypes.CHOOSE_SPORT_FAILURE,
                        payload: { error },
                        error: true
                    },
                    showAlert("Unable to select Sport", {
                        type: "error",
                        icon: "i-flash"
                    })
                )
            );
    });
}
