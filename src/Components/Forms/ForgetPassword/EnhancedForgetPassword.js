import { withFormik } from 'formik';
import {InnerForm} from './InnerForm';
import * as Yup from 'yup';

export  const EnhancedForgetPassword = withFormik({
  mapPropsToValues : props => ({ email : '' , password :''}),

 validationSchema: Yup.object().shape({
   email : Yup.string().email('invalid mail').required('email Required'),
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

