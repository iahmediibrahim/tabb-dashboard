import React from 'react';
import { Form, Input, Icon, Button, Upload } from 'antd';

const FormItem = Form.Item;

class DynamicFieldSet extends React.Component {
	state = {
		fileList: [],
	};
	handleDeviceModelSubmit = (e) => {
		e.preventDefault();

		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	render() {
		const UploadProps = {
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
			onChange: this.props.handleUploadChange,
			multiple: true,
		};
		const { getFieldDecorator, getFieldValue } = this.props.form;

		return (
			<Form style={{ paddingTop: 0 }} onSubmit={this.handleDeviceModelSubmit}>
				<div className="devices-header">
					<div>
						<p className="font-weight-bold mb-2">Model Name:</p>
						{getFieldDecorator('model-name', {
							validate: [
								{
									rules: [
										{
											required: true,
											message: 'Device Type Required!',
										},
									],
								},
							],
						})(<Input placeholder="Model Name" />)}
					</div>
					<div style={{ minWidth: '42%' }}>
						<p className="font-weight-bold mb-2">Photo (optional):</p>
						<Upload {...UploadProps} fileList={this.state.fileList}>
							<Button>
								<Icon type="upload" /> Upload
							</Button>
						</Upload>
					</div>
				</div>
				<FormItem>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</FormItem>
			</Form>
		);
	}
}

export default Form.create()(DynamicFieldSet);
