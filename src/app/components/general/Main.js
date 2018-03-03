/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';
export default class Main extends Component{
    test(){
        appManager.triggerEvent('loadView');
    }
    render(){
       return <div onClick={this.test}>Main</div>
    }
}