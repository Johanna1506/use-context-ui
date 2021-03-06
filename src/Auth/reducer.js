// @flow
import { State } from './model'
import { Action } from '../Core/model'
import * as authType from './actionTypes';


let user = localStorage.getItem('currentUser')
	? JSON.parse(localStorage.getItem('currentUser')).userId
	: '';
let token = localStorage.getItem('currentUser')
	? JSON.parse(localStorage.getItem('currentUser')).token
	: '';

export const initialState: State = {
	user: '' || user,
	token: '' || token,
	loading: false,
	errorMessage: '',
};

export const AuthReducer = (initialState: State, action: Action): Object => {
	const { type, payload, error } = action;
	console.log(payload)

	switch (type) {
		case authType.REQUEST_LOGIN:
			return {
				...initialState,
				loading: true,
			};
		case authType.LOGIN_SUCCESS:
			return {
				...initialState,
				user: payload.userId,
				token: payload.token,
				loading: false,
			};
		case authType.LOGOUT:
			return {
				...initialState,
				user: '',
				token: '',
			};

		case authType.LOGIN_ERROR:
			return {
				...initialState,
				loading: false,
				errorMessage: error,
			};

		default:
			throw new Error(`Unhandled action type: ${type}`);
	}
};
