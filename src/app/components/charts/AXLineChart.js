/**
 * Created by Anxin Yang on 3/7/2018.
 */
import React, {Component} from 'react';
import {LineChart, XAxis, YAxis, Area, Brush, Label, Legend, Line, CartesianGrid, Tooltip} from 'recharts';
const dummyData = [
    {x: 'Page A', cpu: 4000, mem: 9000},
];
const FONTSIZE = 10;
const COLORS = ['#3742fa', '#ff4757', '#ffa502', '#2ed573', '#2f3542', '#1e90ff', '#ff6348'];
export default class AXLineChart extends Component{
    constructor(props){
        super(props);
        this.state ={
            live: true
        };
        this.attr = {};
        this.updateAttr(props);
    }

    updateAttr(props){
        var attr = {};
        for(var key in props){
            attr[key] = props[key]
        }
        Object.assign(this.attr, attr);
    }
    componentWillReceiveProps(newProps){
        this.props = Object.assign({},this.props,newProps);
        //this.setState({live:true});
    }
    componentWillUpdate(){
        this.updateAttr(this.props);
    }

    renderLine() {
        var dataKey = this.attr.dataKey || ['x','cpu'];
        var data = this.attr.data || [];
        var lineList = [];

        for(let i =1; i < dataKey.length; i++) {
            var newLine = <Line
                key={'line_'+ dataKey[i] + Math.random()}
                type="monotone" dataKey={dataKey[i]} stroke={COLORS[i]||'black'}
                isAnimationActive = {false}
                dot = {false}
                activeDot={{r: 5}}/>;
            lineList.push(newLine);
        }
        return lineList;
    }

    render() {
        var width = this.attr.width || 500;
        var height = this.attr.height || 500;
        var dataKey = this.attr.dataKey || ['x','cpu'];
        var data = this.attr.data.slice(0) || [];

        return (
            <div>
                <LineChart width={width} height={height} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis  dataKey={dataKey[0]} fontSize = {FONTSIZE}>
                        <Label fontSize = {FONTSIZE}/>
                    </XAxis>
                    <YAxis fontSize = {FONTSIZE}>
                        <Label fontSize = {FONTSIZE}/>
                    </YAxis>
                    <Tooltip fontSize = {FONTSIZE}/>
                    <Legend fontSize = {FONTSIZE}/>
                    <Brush fontSize = {FONTSIZE}/>
                    {this.renderLine()}
                </LineChart>
            </div>
        )
    }
}