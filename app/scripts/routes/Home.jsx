import React, { PureComponent } from "react";
import { connect } from "react-redux";
import config from "config";

import Logo from "components/Logo";

export class Home extends PureComponent {
    render() {
        return (
            <div key="Home" className="app__home app__route">
                <div className="app__home__intro">
                    <div className="app__container">
                        <div className="app__home__header">
                            <Logo />
                        </div>
                        <h1>{config.title}</h1>
                        <p>{config.description}</p>
                        <a
                            href="https://github.com/zainmustafa/konuxdemo"
                            className="app__home__download btn btn-lg btn-primary btn-icon"
                            target="_blank"
                        >
                            <i className="i-github" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Home);
