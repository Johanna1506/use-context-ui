import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuthState } from '../../Auth';

type Props = {
	component: React$Node,
	path: String,
	isPrivate: boolean,
	rest: Object
}

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }: Props) => {
	const userDetails = useAuthState();
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