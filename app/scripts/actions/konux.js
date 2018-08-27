// @flow
/**
 * @module Actions/NetFlix
 * @desc Actions for NetFlix
 */

import { ActionTypes } from "constants/index";

/**
 * AddToPlayList
 * @param {Object} payload
 * @returns {Object}
 */
export function addToPlayList(payload : Object): Object {
    return {
        type: ActionTypes.ADD_TO_PLAYLIST_REQUEST,
        payload
    };
}
