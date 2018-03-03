import React from 'react'
import { render } from 'react-dom'
import "babel-polyfill";
import { Router, Route, IndexRoute, useRouterHistory, browserHistory  } from 'react-router'
import { createHashHistory } from 'history'

import AppManager from './app/AppManager';
import StyleStore from './app/stylesheet/StyleStore'
import ViewContainer from './app/views/ViewContainer'
//Stores

//Components

AppManager.init();
StyleStore.init();
const routeData = {

};

render(React.createElement(ViewContainer),document.getElementById('root'));






