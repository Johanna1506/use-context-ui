// @flow
export type State = {
	user: string | null,
	token: string| null,
	loading: boolean,
	errorMessage: string | null,
};

export type LoginPayload = {
	email: string,
	password: string,
};


