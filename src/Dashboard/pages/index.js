// @flow
import React from 'react';
import { logout } from '../../Auth';
import { useGlobalDispatch, useGlobalState } from '../../Context';
import Button from '../../Shared/Button';
import styles from '../styles/dashboard.module.scss';

function Dashboard(): React$Node {
	const dispatch = useGlobalDispatch();
	const userDetails = useGlobalState();

	const handleLogout = () => {
		logout(dispatch);
	};
	return (
		<section>
			<h1>Dashboard</h1>
			<Button
				className='secondary'
				label='Logout'
				onClick={handleLogout}
			/>
			<p>Welcome {userDetails.user.email}</p>
		</section>
	);
}

export default Dashboard;
