import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

export class AxisX extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    };
    componentDidMount() {
        let { height, width, data } = this.props;
        let x = d3.scaleTime().rangeRound([0, width]);
        x.domain(d3.extent(data, d => d.x));
        d3.select(this.refs.xAxis)
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();
    }

    render() {
        return <g ref="xAxis" />;
    }
}

export default AxisX;
