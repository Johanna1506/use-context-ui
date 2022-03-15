// @flow
import Login from '../../Auth/pages/Login';
import Dashboard from '../../Dashboard/pages';
import NotFound from '../../NotFound/pages';
import type { Route } from '../model';
import { HOME, LOGIN } from '../constants';

const routes: Route[] = [
	{
		path: LOGIN,
		component: Login,
		isPrivate: false,
		inMenu: false
	},
	{
		path: HOME,
		component: Dashboard,
		isPrivate: true,
		inMenu: true
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
		inMenu: false
	},
];

export default routes;
