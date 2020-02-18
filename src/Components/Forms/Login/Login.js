import React, { Component } from 'react';
import { EnhancedForm } from './EnhancedForm';
import { FormsLayout } from './../FormsLayout';
class Login extends Component {
	render() {
		return (
			<FormsLayout heading="Login">
				<EnhancedForm />
			</FormsLayout>
		);
	}
}
export default Login;
