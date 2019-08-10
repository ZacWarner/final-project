import React, { createRef, Component } from "react";
import * as d3 from "d3";
// import '../../../styles/dashboard/pie.scss';
import '../../styles/dashboard/pie.scss';

class PieClass extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef();
        console.log(this.ref);
        this.createPie = d3
            .pie()
            .value(d => d.value)
            .sort(null);
        this.createArc = d3
            .arc()
            .innerRadius(props.innerRadius)
            .outerRadius(props.outerRadius);
        this.colors = d3.scaleOrdinal(d3.schemeCategory10);
        this.format = d3.format(".2f");
        this.percent = (data) => {
            let res = (data / 5) * 100;
            return res + "%";
        }
        this.pieTween = (b) => {
            b.innerRadius = 0;
            var i = d3.interpolate({ startAngle: 0, endAngle: 0 }, b);
            return (t) => (this.createArc(i(t)));
        };
    }
    componentDidMount() {
        //Temporary Hard Coded Data
        const data = [{ "data": 0, "value": "2" },
        { "data": 1, "value": "2" },
        { "data": 2, "value": "1" }];

        const svg = d3.select(this.ref.current).append('svg')
            .attr('width', this.props.width)
            .attr('height', this.props.height)
            .append('g')
            .attr('transform', 'translate(' + this.props.width / 2 + ',' + this.props.height / 2 + ')');

        // const data = this.props.data;

        const g = svg.selectAll('.arc')
            .data(this.createPie(data))
            .enter().append('g')
            .attr('class', 'arc');

        g.append('path')
            .attr('d', this.createArc)
            .style('fill', (d, i) => this.colors(d.index))
            .transition()
            .ease(d3.easeLinear)
            .duration(1500)
            .attrTween('d', this.pieTween);

        g.append('text')
            .transition()
            .ease(d3.easeLinear)
            .duration(1500)
            .attr("transform", d => `translate(${this.createArc.centroid(d)})`)
            .attr('dy', '.35em')
            // .text(d => this.format(d.value));
            // .text(d => this.percent(d.value));
            .text(d => d.value);

    }

    render() {
        return (
            <div>
                <h5>Overall Status (legends)</h5>
                <div ref={this.ref} />
            </div>
        );
    }
}

export default PieClass;
