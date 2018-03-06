/**
 * Created by Anxin Yang on 3/2/2018.
 */
import generalStyle from './general/General'

class StyleStore{
    constructor(){
        this.style = {};
        this.style =  Object.assign(this.style, generalStyle);
    }
    init(){
        window.styleStore = this;
    }
    getStyle(className){
        return Object.assign({},this.style[className]);
    }
}
const ss = new StyleStore();
export default ss;