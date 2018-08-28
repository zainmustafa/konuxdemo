import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Chart from "../components/Chart";
import { konuxApiData } from "../actions";

export class Konux extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired,
        konuxApiData: PropTypes.func.isRequired
    };
    componentDidMount() {
        this.props.konuxApiData();
    }

    render() {
        const { data } = this.props;
        return (
            <div key="Konux" className="app__konux app__route">
                {data.length ? (
                    <Chart data={data} />
                ) : (
                    <div className="konux__loader" />
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.konux.values
    };
}

const mapDispatchToProps = {
    konuxApiData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Konux);
