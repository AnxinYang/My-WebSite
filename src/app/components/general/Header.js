/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedItem: 'home'
        };

        var self = this;
        var setSelectItem = function () {
            var selectedItemName = this.props.name;
            var newState = {
                selectedItem: selectedItemName
            };
            newState = Object.assign({}, self.state, newState);
            self.setState(newState);
        }

        this.componentList = {
            home: {
                'name': 'home',
                'blueprint': 'AXButton',
                'text': 'Home',
                'toggleMode': true,
                'styleSet': styleStore.getStyle('headerButtons'),
                'handlers':{
                    'click': setSelectItem
                }

            },
            portfolio: {
                'name': 'portfolio',
                'blueprint': 'AXButton',
                'text': 'Portfolio',
                'toggleMode': true,
                'styleSet': styleStore.getStyle('headerButtons'),
                'handlers':{
                    'click': setSelectItem
                }
            },
            resume: {
                'name': 'resume',
                'blueprint': 'AXButton',
                'text': 'Resume',
                'toggleMode': true,
                'styleSet': styleStore.getStyle('headerButtons'),
                'handlers':{
                    'click': setSelectItem
                }
            },
            contact: {
                'name': 'contact',
                'blueprint': 'AXButton',
                'text': 'Contact',
                'toggleMode': true,
                'styleSet': styleStore.getStyle('headerButtons'),
                'handlers':{
                    'click': setSelectItem
                }
            }
        };
    }

    componentDidMount(){
        var self = this;
        appManager.listenEvent(this, 'Header.itemSelected',
            (selectedItemName)=>{
                var newState = {
                    selectedItem: selectedItemName
                };
                newState = Object.assign({}, self.state, newState);
                self.setState(newState);
            }
        )
    }

    renderChildren(){
        var renderList = [];
        var componentList = this.componentList;
        for(var name in componentList){
            var component = componentList[name];
            var props = Object.assign({}, component, {key: 'header_'+component.name});

            if(name === this.state.selectedItem){
                props.isActivated = true;
            }else{
                props.isActivated = false;
            }

            var element = appManager.getComponent(component.blueprint, props);
            renderList.push(element);
        }
        return renderList;
    }
    render() {
        return (
            <div id='header' style={styleStore.getStyle('headerContainer')}>
                {this.renderChildren()}
            </div>
        )
    }
}