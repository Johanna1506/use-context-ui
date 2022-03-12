import React from 'react';
import Login from '../../Auth/pages';
import Dashboard from '../../Dashboard/pages';
import NotFound from '../../NotFound/pages';
import { Route } from '../model';

const routes: Route = [
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: true,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
	},
];

export default routes;
