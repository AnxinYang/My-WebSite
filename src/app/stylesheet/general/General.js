/**
 * Created by Anxin Yang on 3/2/2018.
 */
const generalStyle = {
    body: {'fontFamily': 'Montserrat', 'overflow': 'hidden'},
    containerMain: {'width': '100vw', 'height': '100vh'},
    headerButtons: {
        'normal': {
            container: {
                maxWidth: '120px',
                minWidth: 'min-content',
                textAlign: 'center',
                transition: '0.3s',
                color: 'black',
                cursor:'pointer',
            },
            innerText:{
                display: 'block',
                height: '100%',
                padding: '1em 0 1em 0'
            }
        },
        mouseOver:{
            container: {
                background: '#1e90ff',
                color: 'white'
            }
        },
        click: {
            container: {
                background: '#2f3542',
                color: 'white'
            }
        },
        activated: {
            container: {
                background: '#2f3542',
                color: 'white'
            }
        }
    }
};
export default generalStyle;