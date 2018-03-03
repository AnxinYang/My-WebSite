/**
 * Created by Anxin Yang on 3/2/2018.
 */
export default class App{
    init(callback){
        window.app=this;
        this.data = {};
        this.eventList = {};
        if(callback!==undefined){
            callback();
        }
    }
    getValue(key){
        if(key===undefined){
            return undefined;
        }
        return this.data[key];
    }
    setValue(key,data){
        this.data[key] = data;
    }


    listenEvent(listener, eventName, response){
        let event =  this.eventList[eventName];
        if(event===undefined){
            this.events[eventName] = {};
        }

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
}