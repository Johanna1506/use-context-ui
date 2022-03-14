// @flow
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from '..';
import Button from '../../Shared/Button';
import type { LoginPayload } from '../model';
import styles from '../styles/login.module.css';

const initialValues: LoginPayload = {
	username: '',
	password: ''
};

function Login() {
	let history = useHistory();
	const [formValues, setFormValues] = useState(initialValues);

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();
	const userDetails = useAuthState();
	
	useEffect(() => {
		console.log(userDetails)
		if(userDetails?.token) {
			history.push('/dashboard')
		}
	}, [userDetails, history])

	const handleChange = (e: Event) => {
		const { value, name } = e.target;
		setFormValues((prevState) => ({
			...prevState,
			[name]: value
		}))
	};

	const isDisabled = (): Boolean => {
		let disabled = true;
		if(formValues.username && formValues.password) {
			disabled = false
		}
		return disabled;
	};

	const handleLogin = async (e: Event) => {
		e.preventDefault();
		loginUser(dispatch, formValues);
	};

	return (
		<div className={styles.container}>
			<div>
				<h1>Login Page</h1>
				{errorMessage && <p className={styles.error}>{errorMessage}</p>}
				<form>
					<div className={styles.loginForm}>
						<div className={styles.loginFormItem}>
							<label htmlFor='username'>Username</label>
							<input
								type='text'
								id='username'
								name='username'
								value={formValues.username}
								onChange={handleChange}
								disabled={loading}
							/>
						</div>
						<div className={styles.loginFormItem}>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								name='password'
								value={formValues.password}
								onChange={handleChange}
								disabled={loading}
							/>
						</div>
					</div>
					<Button
						label='Connexion'
						onClick={handleLogin}
						disabled={isDisabled()}
						isLoading={loading}
					/>
				</form>
			</div>
		</div>
	);
}

export default Login;
