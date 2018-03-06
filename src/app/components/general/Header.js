/**
 * Created by Anxin Yang on 3/3/2018.
 */
import React, {Component} from 'react';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isInit: false,
            selectedItem: 'home'
        };

        var self = this;
        var setSelectItem = function () {
            var selectedItemName = this.props.name;
            var newState = {
                selectedItem: selectedItemName
            };
            newState = Object.assign({}, self.state, newState);
            //this.setStyle(newState);
            self.setState(newState);
        };

        this.content = {
            applyTOAll:{
                'blueprint': 'AXButton',
                'toggleMode': true,
                'styleSet': styleStore.getStyle('headerButtons'),
                'handlers':{
                    'click': setSelectItem
                }
            },
            componentList: {
                home: {
                    'name': 'home',
                    'text': 'Home',
                },
                Tools: {
                    'name': 'Tools',
                    'text': 'Tools',
                },
                portfolio: {
                    'name': 'portfolio',
                    'text': 'Portfolio',
                },
                resume: {
                    'name': 'resume',
                    'text': 'Resume',
                },
                contact: {
                    'name': 'contact',
                    'text': 'Contact',
                }
            }

        };
    }

    componentDidMount(){
        
    }

    renderChildren(){
        var renderList = [];
        var componentList = this.content.componentList;
        var applyToAll = this.content.applyTOAll;
        for(var name in componentList){
            var component = componentList[name];
            var key = {key:'header_'+component.name};

            var props = Object.assign({},applyToAll, component, key);
            props.isActivated = (name === this.state.selectedItem);

            var element = appManager.getComponent(props.blueprint, props);
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