// @flow
/**
 * @namespace Constants
 * @desc App constants
 */

import keyMirror from "fbjs/lib/keyMirror";

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes: Object = keyMirror({
    
    FETCH_POPULAR_REPOS_REQUEST: undefined,
    FETCH_POPULAR_REPOS_SUCCESS: undefined,
    FETCH_POPULAR_REPOS_FAILURE: undefined,
    FETCH_POPULAR_REPOS_CANCEL: undefined,
    ADD_TO_PLAYLIST_REQUEST: undefined,
    ADD_TO_PLAYLIST_SUCCESS: undefined,
    ADD_TO_PLAYLIST_FAILURE: undefined,
    CANCEL_FETCH: undefined,
    SHOW_ALERT: undefined,
    HIDE_ALERT: undefined
});

/**
 * @constant {Object} XHR
 * @memberof Constants
 */
export const XHR: Object = keyMirror({
    SUCCESS: undefined,
    FAIL: undefined
});
