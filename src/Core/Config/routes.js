// @flow
import Login from '../../Auth/pages/Login';
import Dashboard from '../../Dashboard/pages';
import NotFound from '../../NotFound/pages';
import type { Route } from '../model';

const routes: Route[] = [
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
