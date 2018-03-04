/**
 * Created by Anxin Yang on 3/2/2018.
 */
const generalStyle = {
    body: {'fontFamily': 'Montserrat', 'overflow': 'hidden'},
    containerMain: {'width': '100vw', 'height': '100vh'},
    headerButtons: {
        'normal': {
            container: {
                'height': '60px',
                'maxHeight': '60px',
                'maxWidth': '180px',
                'minWidth': 'min-content',
                'textAlign': 'center',
                'transition': '0.3s',
                'color': 'black',
            }
        },
        'mouseEnter':{
            container: {
                'background': '#1e90ff',
                'color': 'white'
            }
        },
        'activated': {
            container: {
                'background': '#1e90ff',
                'color': 'white'
            }
        }
    }
};
export default generalStyle;