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
    
    FETCH_API_DATA: undefined,
    FETCH_API_DATA_SUCCESS: undefined,
    FETCH_API_DATA_FAILURE: undefined,
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
