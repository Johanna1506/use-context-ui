// @flow
import * as authType from './actionTypes';
import type { Dispatch } from '../Core/model';
import type { LoginPayload } from './model';

const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';

export async function loginUser(dispatch: Dispatch, loginPayload: LoginPayload): Promise {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(loginPayload),
	};

	try {
		dispatch({ type: authType.REQUEST_LOGIN });
		let response = await fetch(`${ROOT_URL}/login`, requestOptions);
		let data = await response.json();

		if (data.user) {
			dispatch({ type: authType.LOGIN_SUCCESS, payload: data });
			localStorage.setItem('currentUser', JSON.stringify(data));
			return data;
		}

		dispatch({ type: authType.LOGIN_ERROR, error: data.errors[0] });
		console.log(data.errors[0]);
		return;
	} catch (error) {
		dispatch({ type: authType.LOGIN_ERROR, error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
