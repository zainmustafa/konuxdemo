// @flow
import createHistory from "history/createBrowserHistory";
import qs from "qs";

const history = createHistory();

history.location = {
    ...history.location,
    query: qs.parse(history.location.search.substr(1)),
    state: { modal: false, scroll: false }
};

/* istanpul ignore next */
history.listen(() => {
    history.location = {
        ...history.location,
        query: qs.parse(history.location.search.substr(1)),
        state: history.location.state || {}
    };
});

export default history;
