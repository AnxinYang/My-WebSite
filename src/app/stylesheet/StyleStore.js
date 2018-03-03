/**
 * Created by Anxin Yang on 3/2/2018.
 */

import general from './general/general'

export default class StyleStore{

    init(callback){
        window.StyleStore=this;
        this.styleStore = {};
        if(callback!==undefined){
            callback();
        }
    }
    Style(className){
        return this.styleStore[className];
    }
}