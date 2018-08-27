/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from "redux-observable";
import { getApiData } from "./konux";

export default combineEpics(getApiData);
