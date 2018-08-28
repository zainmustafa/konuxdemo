/**
 * @module Epics/Root
 * @desc Root Epics
 */

import { combineEpics } from "redux-observable";
import { konuxApiData } from "./konux";

export default combineEpics(konuxApiData);
