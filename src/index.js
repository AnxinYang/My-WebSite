import React from 'react'
import { render } from 'react-dom'
import "babel-polyfill";
import cm from './Common/CommunicationManager'
import { Router, Route, IndexRoute, useRouterHistory, browserHistory  } from 'react-router'
import { createHashHistory } from 'history'

import TopContainer from './Common/TopContainer'
import PopupWrapper from './Common/Components/PopupWrapper'
import TestConsole from './Common/Test/TestConsole'
import {PopupCloseBox} from './Common/Components/PopupComponents'

//Components
import Select from './Common/Components/Select'
import Text from './Common/Components/Text'
import AutoComplete from './Common/Components/AutoComplete'
import Span from './Common/Components/Span'
import Tree from './Common/Components/Tree'
import Checkbox from './Common/Components/Checkbox'
import ModelWrapper from './Common/Components/ModelWrapper'
import NEPassword from './Common/Components/NEPassword'
import DropdownLink from './Common/Components/DropdownLink'
import Link from './Common/Components/Link'
import SelectPopup from './Common/Components/SelectPopup'
import Summary from './Common/Components/Summary'
import MultiAssign from './Common/Components/MultiAssign'
import MultiUpdate from './Common/Components/MultiUpdate'
import Relation from './Common/Components/Relation'
import Radio from './Common/Components/Radio'
import Input from './Common/Components/Input'
import Search from './Common/Components/Search'
import AccordionItem from './Common/Components/AccordionItem'
import LineMeter from './Common/Components/LineMeter'
import ToolBar from './Common/Components/ToolBar'
import Img from './Common/Components/Img'
import CEDButtons from './Common/Components/CEDButtons'
import Table from './Common/Components/Table'
import Form from './Common/Components/Form'
import SimpleForm from './Common/Components/SimpleForm'
import {BarChart, LineChart, PieChart} from 'react-easy-chart';
import ChartGadget from './Common/Components/ChartGadget'
import LineChartWrapper from './Common/Components/LineChartWrapper';
import Tab from './Common/Components/Tab'
import Wizard from './Common/Containers/Wizard'
import CarrierDiagram from './Components/CarrierDiagram'
import EnterpriseDiagram from './Components/EnterpriseDiagram'
import GoogleMap from './Common/Components/GoogleMap'
import GadgetContainer from './Common/Containers/GadgetContainer'
import FlexBox from './Common/Components/FlexBox'
import Hr from './Common/Components/Hr'
import TestWrapper from './Common/Test/Components/TestWrapper'
import NEContextMenu from './Common/Components/NEContextMenu'
import SiteMarker from './Common/Components/SiteMarker'
import D3Canvas from './Common/Components/D3Canvas'
import {BarChart as BarChart2, Bar, XAxis, YAxis, Text as RCText} from 'recharts';


const routeData = {
		"Login":{"label":"Login", "component":FlexBox, "path":"Login", "props":{"name":"LoginContainer", "schemaName":"LoginContainer", "formType":"FlexBox"}},
		"TopContainer":{"label":"TopContainer", "component":TopContainer, "path":"Home"},	
		"Build":{"label":"Build", "component":ModelWrapper, "path":"Build", "props":{"schemaName":"BuildContainer", "formType":"Form"}},
		"Dashboard":{"label":"Dashboard", "component":FlexBox, "path":"Dashboard", "props":{"name":"DashboardContainer", "schemaName":"DashboardContainer", "formType":"Form"}},
    	"Monitor":{"label":"Monitor", "component":ModelWrapper, "path":"Monitor", "props":{"name":"MonitorContainer", "schemaName":"MonitorContainer", "formType":"Form"}},
    	"MarketPlace":{"label":"MarketPlace", "component":ModelWrapper, "path":"MarketPlace", "props":{"name":"MarketPlaceContainer", "schemaName":"MarketPlaceContainer", "formType":"Form"}},
    	"Setting":{"label":"Setting", "component":ModelWrapper, "path":"Setting", "props":{"name":"SettingContainer", "schemaName":"SettingContainer", "formType":"Form"}},
		"PopupWrapper":{"label":"PopupWrapper", "component":PopupWrapper, "path":"PopupWrapper"},		
		"TestConsole":{"label":"TestConsole", "component":TestConsole, "path":"TestConsole"}
}

const componentMap = {
	"Select":Select,
	"Text":Text,
	"AutoComplete":AutoComplete,
	"Span":Span,
	"Tree":Tree,
	"Checkbox":Checkbox,
	"NEPassword":NEPassword,
	"DropdownLink":DropdownLink,
	"Link":Link,
	"SelectPopup":SelectPopup,
	"Summary":Summary,
	"MultiAssign":MultiAssign,
	"MultiUpdate":MultiUpdate,
	"Relation":Relation,
	"Radio":Radio,
	"Input":Input,
	"hidden":Input,
	"file":Input,
	"AccordionItem":AccordionItem,
	"LineMeter":LineMeter,
	"ToolBar":ToolBar,
	"Img":Img,
	"CEDButtons":CEDButtons,
	"Table":Table,
	"Form":Form,
	"SimpleForm":SimpleForm,
	"BarChart":BarChart,
	"LineChart":LineChartWrapper,
	"PieChart":PieChart,
	"ChartGadget":ChartGadget,
	"Tab":Tab,
	"Wizard":Wizard, 
	"CarrierDiagram":CarrierDiagram,
	"EnterpriseDiagram":EnterpriseDiagram, 
	"GoogleMap":GoogleMap,
	"GadgetContainer":GadgetContainer,
	'FlexBox': FlexBox,
	'Hr': Hr,
	'ModelWrapper':ModelWrapper,
	'TestWrapper':TestWrapper,
	'NEContextMenu':NEContextMenu,
	'PopupCloseBox':PopupCloseBox,
	'D3Canvas':D3Canvas,
    "BarChart2":BarChart2,
    "XAxis":XAxis,
    "YAxis":YAxis,
    "Bar":Bar,
	'RCText':RCText
}


//let store = createStore(ReducerManager, applyMiddleware(asyncDispatchMiddleware));
cm.init(routeData, componentMap);

let sm = require("./Common/ServiceManager").default
sm.init();

var login = {
	component: routeData["Login"].component,
	props: Object.assign({}, routeData["Login"].props)
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
)


