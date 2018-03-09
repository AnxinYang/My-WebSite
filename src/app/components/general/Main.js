/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';
const dummyData = [
    {x: 'Page A', cpu: 4000, mem: 9000},
    {x: 'Page B', cpu: 3000, mem: 7222},
    {x: 'Page C', cpu: 2000, mem: 6222},
    {x: 'Page D', cpu: 1223, mem: 5400},
    {x: 'Page E', cpu: 1890, mem: 3200},
    {x: 'Page F', cpu: 2390, mem: 2500},
    {x: 'Page G', cpu: 3490, mem: 1209},
];
export default class Main extends Component{
    constructor(){
        super();
        this.lineData = [{x: 'Page A', cpu: 4000, mem: 9000}];
        this.state = {
            live: true
        }
    }
    componentDidMount(){
        this.lineLiveSim();
    }
    componentDidUpdate(){
        this.lineLiveSim();
    }
    lineLiveSim(){
        var MaxTick = 100;
        var dataKey = ['x','cpu','mem'];
        var lineData = this.lineData;

        if(lineData.length >= MaxTick){
            lineData.pop();
        }
        var index = Math.floor(Math.random()*7);
        lineData.push(dummyData[index]);

        this.lineData = lineData;
        this.setStateWithDelay({live:true},3000);
        appManager.setValue('dashboardData', lineData);
    }

    setStateWithDelay(newState, delay){
        var self = this;
        setTimeout(function () {
            self.setState(newState);
        },delay)
    }
    render() {
        return (
            <div>
                {appManager.getComponent('Header', {key:'Header'})}
                {appManager.getComponent('AXLineChart', Object.assign({},{key:'AXLineChart', willFetchExternal: true}))}
            </div>
        )
    }
}