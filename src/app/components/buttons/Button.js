/**
 * Created by Anxin Yang on 3/6/2018.
 */
import React, {Component} from 'react';
export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: this.props.status
        };
    }
    init(props){
        this.attr = {
            id: props.name || appManager.getId(),
            status: props.status || 'normal', // normal| hidden| activated| deactivated| disabled
            text: props.text || 'Button',
            showDelay: props.showDelay || false,
            styleSet: (Object.assign({},props.styleSet)) || {'normal': {}},
            handleMouseEvent: props.handleMouseEvent || (()=>{})
        };
        //this.currentStyleSet = this.attr.styleSet[this.attr.status];
    }
    componentWillMount(){
        this.init(this.props);
        this.changeStyle();
    }
    componentWillReceiveProps(newProps){
        this.init(newProps);
        this.changeStyle();
    }
    componentWillUpdate(){
    }
    handleMouseEvent(event){
        var status = this.state.status;
        if(status !== 'hidden' && status !== 'disabled'){
            this.changeStyle(event);
        }
        this.attr.handleMouseEvent.call(this, event);
        this.updateState({status:status});
    }
    updateState(newState,delay){
        if(delay === undefined){
            delay = 0;
        }
        setTimeout(()=> {
                this.setState(Object.assign({}, this.state, newState))
            }
        ,delay);
    }
    changeStyle(event) {
        // Setup vars
        var newStyleSetName = event || 'normal';
        var styleSet = this.attr.styleSet;
        var status = this.state.status;
        var statusStyleSet = styleSet[status];
        var newStyleSet = Object.assign({}, styleSet[newStyleSetName]);


        if (newStyleSet === undefined) {
            newStyleSet = Object.assign({},styleSet['normal']);
        }

        for (var key in styleSet['normal']) {
            newStyleSet[key] = Object.assign({}, styleSet['normal'][key], statusStyleSet[key], newStyleSet[key]);
        }

        // Return result
        this.currentStyleSet = newStyleSet;
    }

    innerRender() {
        return (
            <span
                id={this.id+'_inner'}
                onClick={()=> {this.handleMouseEvent('click')}}
                onMouseEnter={()=>{this.handleMouseEvent('mouseEnter')}}
                onMouseLeave={()=>{this.handleMouseEvent('mouseLeave')}}
                onMouseOver={()=>{this.handleMouseEvent('mouseOver')}}
                style = {this.currentStyleSet['innerText'] || {}}
            >{this.props.text}</span>
        )
    }

    //Do Not Override this method
    render(){
        return (
            <div id={this.id}
                 style={this.currentStyleSet['container'] || {}}>
                {this.innerRender()}
            </div>
        )
    }
}