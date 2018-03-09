/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';
export default class AXButton extends Component{
    constructor(props){
        super(props);
        this.attr = {
            status: props.status || 'normal',
            toggleMode: this.props.toggleMode || false,
            disabled: this.props.disabled || false,
            text: this.props.text || 'Button',
            isActivated: this.props.isActivated || false,
            showDelay: this.props.showDelay || false,
            styleSet: this.props.styleSet || { 'normal': {}}
        };
        this.state = {
            status: this.attr.status || 'normal',
            isActivated: this.attr.isActivated || false,
        };

        this.id = this.attr.name || appManager.getId();

        this.styleSet = Object.assign({},this.attr.styleSet[this.props.status]);
    }

    componentWillMount(){
        this.setStyle(this.state);
    }
    componentWillReceiveProps(newProps){
        this.props = newProps;
        let newState = {
            status: this.props.status,
            toggleMode: this.props.toggleMode,
            disabled: this.props.disabled,
            text: this.props.text,
            isActivated: this.props.isActivated,
            showDelay: this.props.showDelay
        };

        this.setStyle(newState);
        this.setState(newState);
    }

    setStateWithDelay(newState, delay){
        var self = this;
        setTimeout(function () {
            self.setStyle(newState);
            self.setState(newState);
        },delay)
    }

    handleMouseEvent(event){
        var handlers = this.props.handlers;
        if(handlers !== undefined && handlers[event] !== undefined){
            handlers[event].call(this);
        }
        var isActivated = this.state.isActivated;
        if(this.state.toggleMode === true && event === 'click'){
            isActivated = !this.state.isActivated;
        }
        var newState ={
            status: event,
            isActivated: isActivated
        };
        newState = Object.assign({},this.state,newState);
        this.setStyle(newState);
        this.setState(newState);
    }

    setStyle(state){

        var newStyleSet = this.styleSet[state.status];

        if(state.toggleMode === true){
            newStyleSet = state.isActivated?this.styleSet['activated']:this.styleSet['deactivated'];
        }
        if(state.status === 'mouseOver'){
            newStyleSet = this.styleSet[state.status];
        }

        if(state.disabled === true){
            newStyleSet = this.styleSet['disabled'];
        }


        if(newStyleSet===undefined){
            newStyleSet = this.styleSet['normal'];
            this.style = {};
        }
        if(state.showDelay > 0){
            newStyleSet.container.opacity = 0;
            var newState = {
                showDelay: 0
            };
            newState = Object.assign({},this.state,newState);
            this.setStateWithDelay(newState, state.showDelay);
        }else {
            newStyleSet.container.opacity = 1;
        }

        for(var key in newStyleSet){
            this.styleSet[key] = Object.assign({},this.style[key], newStyleSet[key]);
        }
    }

    innerRender() {
        return (
            <span
                id={this.id+'_inner'}
                onClick={()=> {this.handleMouseEvent('click')}}
                onMouseEnter={()=>{this.handleMouseEvent('mouseEnter')}}
                onMouseLeave={()=>{this.handleMouseEvent('mouseLeave')}}
                onMouseOver={()=>{this.handleMouseEvent('mouseOver')}}
                style = {this.styleSet['innerText'] || {}}
            >{this.props.text}</span>
        )
    }

    //Do Not Override this method
    render(){
        return (
            <div id={this.id}
                 style={this.styleSet['container'] || {}}>
                {this.innerRender()}
            </div>
        )
    }
}