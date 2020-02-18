import React from 'react';
import { Field } from 'formik';
import classNames from 'classnames';
import { DefaultInput } from './../../ui-inputs/DefaultInput';
import { Link } from 'react-router-dom';
import './../Forms.css';

export const InnerForm = ({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, dirty }) => (
	<form autoComplete="off" onSubmit={handleSubmit}>
		<DefaultInput label="Email" icon="fa-user">
			<Field
				type="email"
				className={classNames('form-control', {
					'has-error': touched.email && errors.email
				})}
				name="email"
				placeholder="Ex : Fatma@gmail.com"
			/>
		</DefaultInput>
		{touched.email && errors.email && <p className="form-text text-danger">{errors.email}</p>}

		<DefaultInput label="Password" icon="fa-lock">
			<Field
				type="password"
				className={classNames('form-control', {
					'has-error': touched.password && errors.password
				})}
				name="password"
				placeholder="******"
			/>
		</DefaultInput>
		{touched.password && errors.password && <p className="form-text text-danger">{errors.password}</p>}
		<div className="form-check">
			<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
			<label className="form-check-label" htmlFor="defaultCheck1">
				Remember Me
			</label>
		</div>

		<Link className="forgetPassword" to={'./../ForgetPassword'}>
			Forget Password
		</Link>

		<button type="submit" disabled={isSubmitting}>
			Login
		</button>
		<Link to="/Dashboard">dashboard</Link>
	</form>
);
