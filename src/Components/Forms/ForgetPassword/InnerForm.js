import React from 'react';
import { Field } from 'formik';
import { DefaultInput } from './../../ui-inputs/DefaultInput';
import classNames from 'classnames';
import './../Forms.css';

export const InnerForm = ({ values, errors, touched, handleSubmit, handleChange, handleBlur, isSubmitting, dirty }) => (
	<form autoComplete="off" onSubmit={handleSubmit}>
		<DefaultInput label="Email" icon="fa-user">
			<Field
				type="email"
				name="email"
				className={classNames('form-control', {
					'has-error': touched.email && errors.email
				})}
				placeholder="Ex : Fatma@gmail.com"
			/>
		</DefaultInput>
		{touched.email && errors.email && <p className="form-text text-danger">{errors.email}</p>}

		<button type="submit" disabled={isSubmitting}>
			Send Reset Email
		</button>
	</form>
);
