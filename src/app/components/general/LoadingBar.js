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
        appManager.listenEvent(this,'loadingBar',function (shouldRun) {
            var newState = {
                animateRun: shouldRun
            };
            newState = Object.assign({},this.state,newState);
        })
    }
    componentDidMount(){
        if(this.state.animateRun){
            var newState = {
                rotate: rotateStart
            };
            newState = Object.assign({},this.state,newState);
            var style = Object.assign({},this.style);
            style.transform = 'rotate(' + newState.rotate + 'deg)';
            this.style = style;
            this.setState(newState);
        }
    }
    componentDidUpdate(){
        var rotate = this.state.rotate+1800;
        var delay = this.state.firstLoop?0:5000;
        var newState = {
            rotate: rotate,
            firstLoop: false
        };
        if(this.state.animateRun){
            newState = Object.assign({},this.state,newState);
            var style = Object.assign({},this.style);
            style.opacity = 1;
            style.transform = 'rotate(' + newState.rotate + 'deg)';
        }else{
            newState = Object.assign({},this.state,newState);
            var style = Object.assign({},this.style);
            style.opacity = 0;
            style.transform = 'rotate(' + newState.rotate + 'deg)';
        }
        this.style = style;
        appManager.setStateWithDelay(this, newState, delay);
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