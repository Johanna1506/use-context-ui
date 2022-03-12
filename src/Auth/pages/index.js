import React, { useState } from 'react';

import { loginUser, useAuthState, useAuthDispatch } from '..';
import Button from '../../Shared/Button';
import { LoginPayload } from '../model';
import styles from '../styles/login.module.css';

const initialValues: LoginPayload = {
	username: '',
	password: ''
};

function Login(props) {
	const [formValues, setFormValues] = useState(initialValues);

	const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();

	const handleChange = (e: Event) => {
		const { value, name } = e.target;
		setFormValues((prevState) => ({
			...prevState,
			[name]: value
		}))
	};

	const isDisabled = () => {
		return formValues.email && formValues.password;
	};

	const handleLogin = async (e: Event) => {
		e.preventDefault();

		try {
			let response = await loginUser(dispatch, formValues);
			if (!response.user) return;
			props.history.push('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={{ width: 200 }}>
				<h1>Login Page</h1>
				{errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
				<form>
					<div className={styles.loginForm}>
						<div className={styles.loginFormItem}>
							<label htmlFor='email'>Username</label>
							<input
								type='text'
								id='email'
								name='email'
								value={formValues.email}
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
						// disabled={isDisabled}
						isLoading={loading}
					/>
				</form>
			</div>
		</div>
	);
}

export default Login;
