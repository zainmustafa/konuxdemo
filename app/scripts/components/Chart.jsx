import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import moment from "moment"
export class Chart extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired
    };
    componentDidMount() {
        this.drawChart();
    }

    drawChart = () => {
        let { data } = this.props;

        let svg = d3.select(this.refs.anchor),
            margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg
                .append("g")
                .attr(
                    "transform",
                    "translate(" + margin.left + "," + margin.top + ")"
                );

        let x = d3.scaleTime().rangeRound([0, width]);

        let y = d3.scaleLinear().rangeRound([height, 0]);
        let line = d3
            .line()
            .x(d => x(d.x))
            .y(d => y(d.y));

        let timeParse = d3.timeParse("%Y-%m-%d %H:%M:%S");
        console.log(data);
        data = data.map(d => {
            console.log(typeof d.y);
            d.x = timeParse(moment.utc(d.x).format("YYYY-MM-DD HH:mm:ss"));
            return d;
        });

        x.domain(d3.extent(data, d => d.x));
        y.domain(d3.extent(data, d => d.y));
        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .select(".domain")
            .remove();

        g.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Value");

        g.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("d", line)


// tRansitions
            // .call(transition);


            // function transition(path) {
            //     path.transition()
            //         .duration(2000)
            //         .attrTween("stroke-dasharray", tweenDash);
            // }
            // function tweenDash() {
            //     var l = this.getTotalLength(),
            //         i = d3.interpolateString("0," + l, l + "," + l);
            //     return function (t) { return i(t); };
            // }
    };
    render() {
        return <svg width="960" height="500" ref="anchor" />;
    }
}

export default Chart;
