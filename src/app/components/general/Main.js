/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';
export default class Main extends Component{
    render() {
        return (
            <div>
                {appManager.getComponent('Header')}
            </div>
        )
    }
}