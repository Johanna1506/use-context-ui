// @flow
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useGlobalState } from '../../Context';

type Props = {
	component: React$Node,
	path: String,
	isPrivate: boolean,
	rest: Object
}

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }: Props): React$Node => {
	const userDetails = useGlobalState();
	console.log(userDetails);
	return (
		<Route
			path={path}
			render={(props) =>
				isPrivate && !Boolean(userDetails.token) ? (
					<Redirect to={{ pathname: '/login' }} />
				) : (
					<Component {...props} />
				)
			}
			{...rest}
		/>
	);
};

export default AppRoutes;
