import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";


export class Chart extends PureComponent {
    static propTypes = {
        konuxApiData: PropTypes.func.isRequired
    };
    componentDidMount(){
        this.drawChart();
    }
    
    drawChart = () => {
        let { data } = this.props;
        let svg = d3.select(this.refs.anchor),
            margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = +svg.attr("width") - margin.left - margin.right - 50,
            height = +svg.attr("height") - margin.top - margin.bottom - 20,
            g = svg
                .append("g")
                .attr(
                    "transform",
                    "translate(" + margin.left + "," + margin.top + ")"
                );

        let x = d3.scaleTime().rangeRound([0, width - 100]);

        let y = d3.scaleLinear().rangeRound([height, 0]);
        let line = d3
            .line()
            .x(d => {
                console.log("x", x(d.x));
                return x(d.x);
            })
            .y(d => {
                console.log("y", y(d.y));
                return y(d.y);
            });

        let utcParse = d3.utcParse("%Y-%m-%dT%H:%M:%S%Z");

        data = data.map(item => {
            item.x = utcParse(item.x);
            return item;
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
            .attr("d", line);
    };
    render() {
        return <svg width="960" height="500" ref="anchor" />;
    }
}

export default Chart;
