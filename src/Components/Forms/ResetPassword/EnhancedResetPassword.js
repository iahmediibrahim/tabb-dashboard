import { withFormik } from 'formik';
import {InnerForm} from './InnerForm';
import * as Yup from 'yup';

export  const EnhancedResetPassword = withFormik({
  mapPropsToValues : props => ({ email : '' , password :''}),

 validationSchema: Yup.object().shape({
  password : Yup.string().required('Password Required'),
  passwordConfirm : Yup.string().oneOf([Yup.ref('password')],'please Enter Similar Password').required('Confirm Your Password'),

}),

 
 handleSubmit : (
    values,
    {
        props,
        setSubmitting,
        setErrors,
    }
  ) => {
  },

  })(InnerForm);

