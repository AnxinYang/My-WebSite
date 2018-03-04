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
            disabled: this.props.disabled || false
        }
    }
    handleClick(){
        var newState ={
            status: 'clicked',
            toggleMode: this.state.toggleMode,
            disabled: this.state.disabled
        };
        if(this.props.handleClick!==undefined){
            this.setState(newState);
        }
    }
}