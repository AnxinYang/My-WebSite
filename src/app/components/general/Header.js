/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.componentList = {
            home: {'name':'home', 'blueprint':'AXButton', 'text':'Home', 'toggleMode': true, 'styleSet': styleStore.getStyle('headerButtons')}
        };
    }
    renderChildren(){
        var renderList = [];
        var componentList = this.componentList;
        debugger
        for(var name in componentList){
            var component = componentList[name];
            var props = Object.assign({}, component, {key: 'header_'+component.name});
            var element = appManager.getComponent(component.blueprint, props);
            renderList.push(element);
        }
        return renderList;
    }
    render() {
        return (
            <div id='header'>
                {this.renderChildren()}
            </div>
        )
    }
}