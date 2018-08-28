// @flow
/**
 * @module Actions/NetFlix
 * @desc Actions for NetFlix
 */

import { ActionTypes } from "constants/index";

/**
 * KonuxApiData
 * @param {Object} payload
 * @returns {Object}
 */
export function konuxApiData(): Object {
    return {
        type: ActionTypes.FETCH_API_DATA
    };
}
