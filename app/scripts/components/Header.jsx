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
                                    style={{ color: "#000", fontWeight: "lighter" }}
                                >
                                    Home
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/konux"
                                className="app__header__link"
                                activeClassName="is-active"
                            >
                                Konux
                            </NavLink>
                        </li>
                        <li>
                                
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
