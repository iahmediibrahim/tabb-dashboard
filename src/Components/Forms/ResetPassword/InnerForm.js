import React from 'react';
import { Field } from 'formik';
import { DefaultInput } from './../../ui-inputs/DefaultInput';
import classNames from 'classnames';
import './../Forms.css';

export const InnerForm = ({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, dirty }) => (
	<form autoComplete="off" onSubmit={handleSubmit}>
		<DefaultInput label="Password" icon="fa-lock">
			<Field
				type="password"
				name="password"
				className={classNames(
					'form-control',
					{
						success: touched.password && !errors.password
					},
					{
						'has-error': touched.password && errors.password
					}
				)}
				placeholder="******"
			/>
		</DefaultInput>
		{touched.password && errors.password && <p className="form-text text-danger">{errors.password}</p>}

		<DefaultInput label="Confirm Password" icon="fa-lock">
			<Field
				type="password"
				name="passwordConfirm"
				className={classNames(
					'form-control',
					{
						success: touched.passwordConfirm && !errors.passwordConfirm
					},
					{
						'has-error': touched.passwordConfirm && errors.passwordConfirm
					}
				)}
				placeholder="******"
			/>
		</DefaultInput>
		{touched.passwordConfirm &&
		errors.passwordConfirm && <p className="form-text text-danger">{errors.passwordConfirm}</p>}
		{touched.passwordConfirm &&
		!errors.passwordConfirm && <p className="form-text text-success">Passwords matches</p>}

		<button type="submit" disabled={isSubmitting}>
			Reset Password
		</button>
	</form>
);
