// @flow
import * as authType from './actionTypes';
import type { Dispatch } from '../Core/model';
import type { LoginPayload } from './model';
import * as apiHelpers from '../Api/helpers';
import * as apiConstants from '../Api/contants';

export async function loginUser(dispatch: Dispatch, loginPayload: LoginPayload): Promise {
	const requestOptions = {
		url: apiConstants.ROOT_URL + 'auth/login',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		data: JSON.stringify(loginPayload),
	};

	apiHelpers.requestDispatchWithAxios(
		requestOptions,
		authType.REQUEST_LOGIN,
		authType.LOGIN_SUCCESS,
		authType.LOGIN_ERROR,
		dispatch
	)

	// try {
	// 	dispatch({ type: authType.REQUEST_LOGIN });
	// 	let response = await fetch(apiConstants.ROOT_URL + 'auth/login', requestOptions);
	// 	let data = await response.json();

	// 	if (data.user) {
	// 		dispatch({ type: authType.LOGIN_SUCCESS, payload: data });
	// 		localStorage.setItem('currentUser', JSON.stringify(data));
	// 		return data;
	// 	}

	// 	dispatch({ type: authType.LOGIN_ERROR, error: data.errors[0] });
	// 	console.log(data.errors[0]);
	// 	return;
	// } catch (error) {
	// 	dispatch({ type: authType.LOGIN_ERROR, error: error });
	// 	console.log(error);
	// }
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
