import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router';
import paths from './paths';

class Router extends Component {

	render() {
		<BrowserRouter>
			<Switch>
				{paths.map(path => (
					<Route path={path.path} component={path.component}/>
				))}
			</Switch>
		</BrowserRouter>
	}
}

export default Router;
