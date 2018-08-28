import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

export class AxisY extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired,
        height: PropTypes.number.isRequired
    };
    componentDidMount() {
        let { data, height } = this.props;
        let y = d3.scaleLinear().rangeRound([height, 0]);
        y.domain(d3.extent(data, d => d.y));

        d3.select(this.refs.yAxis)
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Value");
    }
    render() {
        return <g ref="yAxis" />
    }
}

export default AxisY;
