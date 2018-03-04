/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';
export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: this.prop.status || 'normal',
            toggleMode: this.props.toggleMode || false,
            disabled: this.props.disabled || false,
            text: this.props.text || 'Button',
            isActivated: this.props.isActivated || true
        };

        if(this.props.styleSet === undefined){
            this.styleSet = {
                'normal': {}
            }
        }
    }

    componentWillMount(){
        this.setStyle();
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
        if(this.props.handleClick!==undefined){
            this.setState(newState);
        }
    }

    setStyle(){
        var status = this.state.status;
        this.styleSet = this.props.styleSet[status];
        if(this.state.toggleMode === true){
            this.styleSet = this.state.isActivated?this.props.styleSet['activated']:this.props.styleSet['deactivated'];
        }
        if(this.styleSet===undefined){
            this.styleSet = this.props.styleSet['normal'];
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
                style = {this.styleSet['innerText']}
            >{this.state.text}</span>
        )
    }

    //Do Not Override this method
    render(){
        return (
            <div id={this.id} style={this.styleSet['container']}>
                {this.innerRender()}
            </div>
        )
    }
}