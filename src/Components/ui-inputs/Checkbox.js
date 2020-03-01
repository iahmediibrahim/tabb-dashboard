import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import './Checkbox.scss';
import heart_checked from './../../assets/img/icons/heart_checked.svg';

class Checkbox extends Component {
	onSubmit = (values) => {
		// console.log(values);
	};

	form = (props) => {
		return (
			<form onSubmit={props.handleSubmit}>
				<div className="form-check fatma">
					<label class="checked-item ">
						Oxygen Saturation
						<Field name="active" type="checkbox" checked="checked" />
						<span class="checkmark" />
						<span className="icon">
							<img src={heart_checked} />
						</span>
					</label>
				</div>
			</form>
		);
	};

	render() {
		return (
			<div className="Checkbox">
				<Formik initialValues={{ active: false }} onSubmit={this.onSubmit} render={this.form} />
			</div>
		);
	}
}

export default Checkbox;
