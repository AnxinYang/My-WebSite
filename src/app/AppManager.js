/**
 * Created by Anxin Yang on 3/2/2018.
 */
import Main from './components/general/Main';
import Header from './components/general/Header';
import LoadingBar from './components/general/LoadingBar';
import AXButton from './components/buttons/AXButton';
import React from 'react';
class AppManager{
    constructor(){
        this.data = {};
        this.eventList = {};
        this.styleStore = {};
        this.componentBlueprint = {
            'Main': Main,
            'Header': Header,
            'AXButton': AXButton,
            'LoadingBar': LoadingBar
        };
    }
    init(callback){
        window.appManager = this;
        if(callback)callback();
    }

    //DON'T USE UNLESS HAVE TO
    getValue(key){
        if(key===undefined){
            return undefined;
        }
        return this[key];
    }
    //DON'T USE UNLESS HAVE TO
    setValue(key,data){
        this[key] = data;
    }

    getComponent(name, props){
        return React.createElement(this.componentBlueprint[name], props);
    }

    listenEvent(listener, eventName, response){
        if(this.eventList[eventName]===undefined){
            this.eventList[eventName] = {};
        }
        let event =  this.eventList[eventName];
        let newListener = {
            response: response
        };

        event[listener] = newListener;
    }

    triggerEvent(eventName, options){
        var event = this.eventList[eventName];
        if(event===undefined && !event.hasOwnProperty()){
            return;
        }

        for(let listener in event){
            let response = event[listener].response;
            if(response !== undefined) {
                response.call(listener, options);
            }
        }
    }

    setStateWithDelay(self, newState, delay){
        setTimeout(function () {
            self.setState(newState);
        },delay)
    }

    //DON'T USE UNLESS HAVE TO
    getId(){
        var seed = new Date();
        var id = 'id_'+ Math.random()*10000 + '_' + seed;
    }
}
const am = new AppManager();
export default am;