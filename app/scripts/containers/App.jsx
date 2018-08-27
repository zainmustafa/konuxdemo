import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import Helmet from "react-helmet";
import cx from "classnames";
import history from "modules/history";

import config from "config";

import Home from "routes/Home";
import Konux from "routes/Konux";
import NotFound from "routes/NotFound";

import Header from "components/Header";
import SystemAlerts from "components/SystemAlerts";

export class App extends React.Component {
    static propTypes = {
        app: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { app, dispatch } = this.props;

        return (
            <ConnectedRouter history={history}>
                <div
                    className={cx("app", {
                        "app--private": false
                    })}
                >
                    <Helmet
                        defer={false}
                        htmlAttributes={{ lang: "pt-br" }}
                        encodeSpecialCharacters={true}
                        defaultTitle={config.title}
                        titleTemplate={`%s | ${config.name}`}
                        titleAttributes={{ itemprop: "name", lang: "pt-br" }}
                    />
                    <Header dispatch={dispatch} />
                    <main className="app__main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/konux" component={Konux} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                    <SystemAlerts alerts={app.alerts} dispatch={dispatch} />
                </div>
            </ConnectedRouter>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        app: state.app
    };
}

export default connect(mapStateToProps)(App);
