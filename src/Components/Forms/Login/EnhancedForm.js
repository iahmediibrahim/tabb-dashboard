import { withFormik } from 'formik';
import { InnerForm } from './InnerForm';
import * as Yup from 'yup';

export const EnhancedForm = withFormik({
	mapPropsToValues: (props) => ({ email: '', password: '' }),

	validationSchema: Yup.object().shape({
		email: Yup.string().email('invalid mail').required('email Required'),
		password: Yup.string().required('Password Required')
	}),

	handleSubmit: (values, { props, setSubmitting, setErrors }) => {
		console.log('loggedin');
	}
})(InnerForm);
