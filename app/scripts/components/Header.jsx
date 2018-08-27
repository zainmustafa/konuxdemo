import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    render() {

        return (
            <header className="app__header">
                <div className="app__container">
                    <ul className="app__header__menu">
                        <li>
                            <NavLink
                                to="/"
                                className="app__header__link"
                                activeClassName="is-active"
                                exact
                            >
                                <span
                                    style={{ color: "red", fontWeight: "bold" }}
                                >
                                    Konux
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/private"
                                className="app__header__link"
                                activeClassName="is-active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                                <NavLink
                                    to="/playlist"
                                    className="app__header__logout btn btn-sm btn-outline-primary btn-icon"
                                    activeClassName="is-active"
                                    exact
                                >
                                    <i className="i-playlist" />
                                </NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
