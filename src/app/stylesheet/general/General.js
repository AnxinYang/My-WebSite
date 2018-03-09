/**
 * Created by Anxin Yang on 3/2/2018.
 */
const generalStyle = {
    body: {'fontFamily': 'Montserrat', 'overflow': 'hidden'},
    containerMain: {'width': '100vw', 'height': '100vh'},
    headerContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '32px',
        marginTop: '32px',
        minWidth: 'min-content'
    },
    headerButtons: {
        normal: {
            container: {
                maxWidth: '128px',
                minWidth: '128px',
                textAlign: 'center',
                transition: '0.5s',
                color: 'black',
                cursor: 'pointer',
            },
            innerText: {
                display: 'block',
                height: '100%',
                padding: '1em 0 1em 0'
            }
        },
        mouseOver: {
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
        disabled: {
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
    },
    loadingBar: {
        background: 'transparent',
        width: '0px',
        height: '0px',
        position: 'absolute',
        margin: 'auto',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: '100%',
        border: '10px solid transparent',
        borderBottom: '10px solid #70a1ff',
        borderLeft: '10px solid #eccc68',
        borderTop: '10px solid #ff4757',
        borderRightColor: '#7bed9f',
        transition: '5s',
        transform: 'rotate(0deg)',
        opacity: 1,
        padding: '20px'
    }
};
export default generalStyle;