import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import moment from "moment";

import AxisX from "../components/chart/AxisX";
import AxisY from "../components/chart/AxisY";
import Line from "../components/chart/Line";

export class Chart extends PureComponent {
    static propTypes = {
        data: PropTypes.array.isRequired
    };
    constructor(props) {
        super(props);
        let { data } = props;

        let margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        let timeParse = d3.timeParse("%Y-%m-%d %H:%M:%S");
        data = data.map(d => {
            d.x = timeParse(moment.utc(d.x).format("YYYY-MM-DD HH:mm:ss"));
            return d;
        });
        this.state = {
            width,
            height,
            margin,
            data
        };
    }
    componentDidMount() {}

    render() {
        const { width, height, margin, data } = this.state;
        return (
            <svg width="960" height="500" ref="anchor">
                <g
                    transform={
                        "translate(" + margin.left + "," + margin.top + ")"
                    }
                >
                    <AxisX
                        width={width}
                        height={height}
                        margin={margin}
                        data={data}
                    />
                    <AxisY
                        width={width}
                        height={height}
                        margin={margin}
                        data={data}
                    />
                    <Line
                        width={width}
                        height={height}
                        margin={margin}
                        data={data}
                    />
                </g>
            </svg>
        );
    }
}

export default Chart;
