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
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('currentUser');
	localStorage.removeItem('token');
}
