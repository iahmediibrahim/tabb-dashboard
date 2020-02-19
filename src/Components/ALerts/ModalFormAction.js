import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, Checkbox } from 'antd';
import Nav from 'react-bootstrap/Nav';

import './styles.scss';

class ModalFormAction extends Component {
	state = {
		visible: false
	};
	//modal function
	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, visible: false });
		}, 2000);
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	//end modal function

	render() {
		const { visible, loading } = this.state;
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="Alerts">
				<Nav.Link onClick={this.showModal} className="d-inline-block btn action">
					Take Action
				</Nav.Link>
				<div>
					<Modal
						visible={visible}
						title="Take Action"
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						width={820}
						footer={[
							<Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
								Submit
							</Button>,
							<Button key="back" onClick={this.handleCancel}>
								Cancel
							</Button>
						]}
					>
						<div className="take-action-modal">
							<Form onSubmit={this.handleSubmit}>
								<Form.Item>
									{getFieldDecorator('remember', {
										valuePropName: 'checked',
										initialValue: false
									})(<Checkbox style={{ width: '37%' }}>Notify Caregiver</Checkbox>)}
									<Input
										type="text"
										onChange={this.handleNumberChange}
										style={{ width: '62%', marginLeft: '1%' }}
									/>
								</Form.Item>
								<Form.Item>
									{getFieldDecorator('remember', {
										valuePropName: 'checked',
										initialValue: false
									})(<Checkbox style={{ width: '37%' }}>Open Support Ticket</Checkbox>)}
									<Input
										type="text"
										onChange={this.handleNumberChange}
										style={{ width: '62%', marginLeft: '1%' }}
									/>
								</Form.Item>
								<Form.Item>
									{getFieldDecorator('remember', {
										valuePropName: 'checked',
										initialValue: false
									})(<Checkbox style={{ width: '37%' }}>Notify Physician</Checkbox>)}
									<Input
										type="text"
										onChange={this.handleNumberChange}
										style={{ width: '62%', marginLeft: '1%' }}
									/>
								</Form.Item>
								<Form.Item>
									{getFieldDecorator('remember', {
										valuePropName: 'checked',
										initialValue: false
									})(<Checkbox style={{ width: '37%' }}>Dispatch Paramedics</Checkbox>)}
									<Input
										type="text"
										onChange={this.handleNumberChange}
										style={{ width: '62%', marginLeft: '1%' }}
									/>
								</Form.Item>
							</Form>
						</div>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Form.create()(ModalFormAction);
