import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './Core/Config/routes';
import { AuthProvider } from './Auth/context';
import AppRoute from './Core/Components/AppRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					{routes.map((route) => (
						<AppRoute
							key={route.path}
							path={route.path}
							component={route.component}
							isPrivate={route.isPrivate}
						/>
					))}
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
