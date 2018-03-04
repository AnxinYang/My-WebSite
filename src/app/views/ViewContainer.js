/**
 * Created by Anxin Yang on 3/2/2018.
 */
import React, {Component} from 'react';
import StyleStore from '../stylesheet/StyleStore'
export default class ViewContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            view: 'Main',
            style: styleStore.getStyle('containerMain'),
            viewProps: {}
        };
    }
    componentDidMount(){
        //appManager.listenEvent(this,'loadView', this.loadView);
    }
    loadView(options){
        if(this.isMounted) {
            var newView = options.view;
            var newState = {
                view: newView,
                style: options.style,
                viewProps: options.viewProps
            };
            this.setState(Object.assign({}, this.state, newState));
        }
    }
    render() {
        return (
            <div style={this.state.style}>
                {appManager.getComponent(this.state.view, this.state.viewProps)}
            </div>
        )
    }
}