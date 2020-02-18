import React from 'react';
import { InputGroup } from 'react-bootstrap';

export const DefaultInput = ({ label, icon, children, palceholder }) => (
	<div className="form-group">
		<label htmlFor={label} className="col-form-label">
			{label}
		</label>
		<InputGroup>
			{children}
			<InputGroup.Text id="inputGroupPrepend">
				<i className={`fa ${icon}`} />
			</InputGroup.Text>
		</InputGroup>
	</div>
);
export default DefaultInput;
