import React, { Component } from 'react';
import { EnhancedForgetPassword } from './EnhancedForgetPassword';
import { FormsLayout } from './../FormsLayout';

class ForgetPassword extends Component {
	render() {
		return (
			<FormsLayout heading="Forget Password">
				<EnhancedForgetPassword />
			</FormsLayout>
		);
	}
}
export default ForgetPassword;
