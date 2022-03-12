// @flow
import React from 'react';
import styles from '../styles/notfound.module.css';

function NotFound(): React$Node {
	return (
		<div className={styles.container}>
			<h1>Page not found</h1>
		</div>
	);
}

export default NotFound;
