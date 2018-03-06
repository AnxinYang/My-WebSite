/**
 * Created by Anxin Yang on 3/5/2018.
 */
import React, {Component} from 'react';
const rotateEnd = 3600;
const rotateStart = 0;
export default class LoadingBar extends Component{
    constructor(props){
        super(props);
        this.state={
            firstLoop: true,
            animateRun: true,
            rotate: rotateStart
        };
        this.style = styleStore.getStyle('loadingBar');
    }
    componentDidMount(){
        if(this.state.animateRun){
            var newState = {
                rotate: rotateStart
            };
            newState = Object.assign({},this.state,newState);
            var style = Object.assign({},this.style);
            style.transform = 'rotate(' + newState.rotate + 'deg)';
            this.style = style
            this.setState(newState)
        }
    }
    componentDidUpdate(){
        if(this.state.animateRun){
            var rotate = this.state.rotate+1800;
            var newState = {
                rotate: rotate,
                firstLoop: false
            };
            var delay = this.state.firstLoop?0:5000;
            newState = Object.assign({},this.state,newState);
            var style = Object.assign({},this.style);
            style.transform = 'rotate(' + newState.rotate + 'deg)';
            this.style = style
            this.setStateWithDelay(newState,delay);
        }
    }
    setStateWithDelay(newState, delay){
        var self = this;
        setTimeout(function () {
            self.setState(newState);
        },delay)
    }
    renderUnits(){
        var style = Object.assign({},this.style);
        style.transform = 'rotate(' + this.state.rotate + 'deg)';
        return <div style={style}>

        </div>
    }
    render() {
        return (
            <div>
                {this.renderUnits()}
            </div>
        )
    }
}