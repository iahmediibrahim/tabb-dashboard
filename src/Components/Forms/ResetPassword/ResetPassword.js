import React , {Component} from 'react';
import {EnhancedResetPassword} from './EnhancedResetPassword';
import {FormsLayout} from './../FormsLayout'

class ResetPassword extends Component{
    render(){
        return(
            <FormsLayout heading="Reset Password">
                 <EnhancedResetPassword/>
            </FormsLayout>
        );
    }
}
export default ResetPassword;