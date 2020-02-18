import React, { Component } from 'react';
import { Checkbox, InputNumber } from 'antd';

class ActionCell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			OpenCellPopover: true
		};
	}
	//
	updateInput = (event, input_value) => {
		const { data, updateActionData } = this.props;
		const target = event.target;
		let value;
		let name;
		if (target) {
			value = target.type === 'checkbox' ? target.checked : target.value;
			name = target.name;
		} else {
			value = input_value; // antd ba3tha
			name = event;
		}
		data[name] = value; // data mm3ota mn parent
		updateActionData(data.id, name, data);
	};

	render() {
		const { data, disabled } = this.props;
		return (
			<React.Fragment>
				<div className="cell-body text-center" style={{ position: 'relative' }}>
					{/* <Checkbox checked={data.checked} disabled={disabled} onChange={this.updateInput} name="checked" /> */}
					<InputNumber
						defaultValue={data.in_value}
						disabled={disabled}
						onChange={this.updateInput.bind(this, 'in_value')}
						name="in_value"
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default ActionCell;
