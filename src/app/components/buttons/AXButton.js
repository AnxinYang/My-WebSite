/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';
export default class AXButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: this.props.status || 'normal',
            toggleMode: this.props.toggleMode || false,
            disabled: this.props.disabled || false,
            text: this.props.text || 'Button',
            isActivated: this.props.isActivated || true
        };

        this.id = this.props.name;
        if(this.props.styleSet === undefined){
            this.styleSet = {
                'normal': {}
            }
        }else{
            this.styleSet = this.props.styleSet;
        }
        this.style = Object.assign({},this.styleSet['normal']);
    }

    componentWillMount(){
        this.setStyle('normal');
    }
    componentWillUpdate(){

    }
    componentDidMount(){

    }

    handleMouseEvent(event){
        var handlers = this.props.handlers;
        if(handlers !== undefined){
            handlers[event].call(this);
        }
        var newState ={
            status: event,
            toggleMode: this.state.toggleMode,
            disabled: this.state.disabled,
            text: this.props.text
        };
        this.setStyle(newState.status);
        this.setState(newState);
    }

    setStyle(state){
        var newStyleSet = this.styleSet[state];
        if(newStyleSet===undefined){
            this.style = Object.assign({},this.styleSet['normal']);
            return;
        }
        if(this.state.toggleMode === true){
            newStyleSet = this.state.isActivated?this.styleSet['activated']:this.styleSet['deactivated'];
        }
        for(var key in newStyleSet){
            this.style[key] = Object.assign({},this.style[key], newStyleSet[key]);
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
                style = {this.style['innerText'] || {}}
            >{this.state.text}</span>
        )
    }

    //Do Not Override this method
    render(){
        return (
            <div id={this.id}
                 style={this.style['container'] || {}}>
                {this.innerRender()}
            </div>
        )
    }
}