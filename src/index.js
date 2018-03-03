import React from 'react'
import { render } from 'react-dom'
import "babel-polyfill";
import cm from './Common/CommunicationManager'
import { Router, Route, IndexRoute, useRouterHistory, browserHistory  } from 'react-router'
import { createHashHistory } from 'history'

import App from './app/App';
//Stores
import StyleStore from './app/stylesheet/StyleStore';
//Components

App.init();
StyleStore.init();

const routeData = {

};

const componentBlueprint = {

};





render(
	  <Router history={browserHistory }>	  	
		<Route path='/' component={routeData["TopContainer"].component}>
			<IndexRoute component={() => React.createElement(login.component,login.props)} />
			{
				Object.keys(routeData).map((key, idx) => {					
					var r = routeData[key]
					var props = Object.assign({}, r.props)
					props.key = idx
					console.log("route:"+key)
					
					//return (<Route key={idx} path={r.path} component={r.component} />)
					//return (React.createElement(Route, props))
					
					return (<Route key={idx} path={r.path} component={() => React.createElement(r.component, props)} />)
				})
			}	
		</Route>
	</Router>,
  document.getElementById('root')
);


