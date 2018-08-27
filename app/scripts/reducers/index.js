/**
 * @module Reducers/Root
 * @desc Root Reducers
 */

import app from "./app";
import konux from "./konux";


export default {
    ...app,
    ...konux
};
