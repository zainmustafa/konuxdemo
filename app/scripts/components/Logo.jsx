import React from "react";
import PropTypes from "prop-types";
import SVG from "react-inlinesvg";

import config from "config";

const Logo = ({ file }) => (
    <div className="app__logo">
        <SVG src={require(`assets/media/images/${file}.svg`)}>
            {config.title}
        </SVG>
    </div>
);

Logo.propTypes = {
    file: PropTypes.string
};

Logo.defaultProps = {
    file: "konux"
};

export default Logo;
