// @flow
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { loginUser } from '..';
import { useGlobalDispatch, useGlobalState } from '../../Context';
import Button from '../../Shared/Button';
import Input from '../../Shared/Input';
import type { LoginPayload } from '../model';

import styles from '../styles/login.module.scss';

const initialValues: LoginPayload = {
	username: '',
	password: ''
};

function Login() {
	let history = useHistory();
	const [formValues, setFormValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialValues);

	const dispatch = useGlobalDispatch();
	const { loading, errorMessage } = useGlobalState();
	const userDetails = useGlobalState();

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

	const handleLogin = async (e: Event) => {
		e.preventDefault();
		if (formValues.username && formValues.password) {
			loginUser(dispatch, formValues);
		} else if (!formValues.username && !formValues.password) {
			setErrors({
				username: 'username is required',
				password: 'password is required'
			})
		} else if (!formValues.username) {
			setErrors((prevState) => ({
				...prevState,
				username: 'username is required'
			}))
		} else {
			setErrors((prevState) => ({
				...prevState,
				password: 'password is required'
			}))
		}
	};

	return (
		<div className={styles.container}>
			<h1>Login Page</h1>
			{errorMessage && <p className={styles.error}>{errorMessage}</p>}
			<form>
				<Input
					label='username'
					error={errors.username}
					name='username'
					value={formValues.username}
					onChange={handleChange}
					disabled={loading}
				/>
				<Input
					type='password'
					error={errors.password}
					label='password'
					name='password'
					value={formValues.password}
					onChange={handleChange}
					disabled={loading}
				/>
				<Button
					label='Connexion'
					onClick={handleLogin}
					isLoading={loading}
				/>
			</form>
		</div>
	);
}

export default Login;
