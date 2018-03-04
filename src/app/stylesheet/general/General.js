/**
 * Created by Anxin Yang on 3/2/2018.
 */
const generalStyle = {
    body: {'fontFamily': 'Montserrat', 'overflow': 'hidden'},
    containerMain: {'width': '100vw', 'height': '100vh'},
    headerContainer:{
        display: 'flex',
    },
    headerButtons: {
        'normal': {
            container: {
                maxWidth: '120px',
                minWidth: '120px',
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
                background: '#ced6e0',
                color: '#f1f2f6'
            }
        },
        click: {
            container: {
                background: '#2f3542',
                color: 'white'
            }
        },
        disabled:{
            container: {
                cursor: 'no-drop',
                color: '#dfe4ea'
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