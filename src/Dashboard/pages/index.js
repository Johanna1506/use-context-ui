import React from 'react';
import { useAuthDispatch, logout, useAuthState } from '../../Auth';
import styles from '../styles/dashboard.module.scss';

function Dashboard(props) {
	const dispatch = useAuthDispatch();
	const userDetails = useAuthState();

	const handleLogout = () => {
		logout(dispatch);
		props.history.push('/login');
	};
	return (
		<div style={{ padding: 10 }}>
			<div className={styles.dashboardPage}>
				<h1>Dashboard</h1>
				<button className={styles.logoutBtn} onClick={handleLogout}>
					Logout
				</button>
			</div>
			<p>Welcome {userDetails.user.email}</p>
		</div>
	);
}

export default Dashboard;
