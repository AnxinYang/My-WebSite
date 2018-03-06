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
                    'text': 'Home',
                },
                tools: {
                    'text': 'Tools',
                },
                portfolio: {
                    'text': 'Portfolio',
                },
                resume: {
                    'text': 'Resume',
                },
                contact: {
                    'text': 'Contact',
                }
            }

        };
    }

    componentDidUpdate(){
        if(this.state.isInit === false){
            this.setState(Object.assign({}, this.state, {isInit: true}));
        }
    }

    renderChildren(){
        var renderList = [];
        var componentList = this.content.componentList;
        var applyToAll = this.content.applyTOAll;
        var delay = 250;
        var maxDelay = 1000;
        var delayMultiplier = 1;

        for(var name in componentList){
            var component = componentList[name];
            var key = {key:'header_'+name};

            var props = Object.assign({},applyToAll, component, key);
            props.name = name;
            props.isActivated = (name === this.state.selectedItem);
            props.showDelay = 0;

            if(!this.state.isInit){
                //props.showDelay = delay*delayMultiplier++;
                props.showDelay = Math.floor(Math.random() * maxDelay) + 1;
            }

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