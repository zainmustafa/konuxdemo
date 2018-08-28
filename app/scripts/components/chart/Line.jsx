import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

export class Line extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    };
    componentDidMount() {
        let { data, height, width } = this.props;

        let x = d3.scaleTime().rangeRound([0, width]);
        let y = d3.scaleLinear().rangeRound([height, 0]);

        x.domain(d3.extent(data, d => d.x));
        y.domain(d3.extent(data, d => d.y));

        let line = d3
            .line()
            .x(d => x(d.x))
            .y(d => y(d.y));

        d3.select(this.refs.path)
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line)
            .call(transition);

        function transition(path) {
            path.transition()
                .duration(2000)
                .attrTween("stroke-dasharray", tweenDash);
        }
        function tweenDash() {
            var l = this.getTotalLength(),
                i = d3.interpolateString("0," + l, l + "," + l);
            return function(t) {
                return i(t);
            };
        }
    }

    render() {
        return <path ref="path" />;
    }
}

export default Line;
