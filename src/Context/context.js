// @flow
import React, { useReducer, useContext, createContext } from 'react';
import { initialState, AuthReducer } from '../Auth/reducer';

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

export function useGlobalState() {
	const context = useContext(GlobalStateContext);
	if (context === undefined) {
		throw new Error('useGlobalState must be used within a GlobalProvider');
	}

	return context;
}

export function useGlobalDispatch() {
	const context = useContext(GlobalDispatchContext);
	if (context === undefined) {
		throw new Error('useGlobalDispatch must be used within a GlobalProvider');
	}

	return context;
}

export const GlobalProvider = ({ children }:  React$Node) => {
	const [user, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<GlobalStateContext.Provider value={user}>
			<GlobalDispatchContext.Provider value={dispatch}>
				{children}
			</GlobalDispatchContext.Provider>
		</GlobalStateContext.Provider>
	);
};
