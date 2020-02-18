import React, { Component } from 'react';
import { Form, Table, Button, Modal, List } from 'antd';
import { Col, Row } from 'react-bootstrap';
import 'antd/dist/antd.css';
import './styles.scss';
import heartAlert from './../../assets/img/icons/heartAlert.svg';
import patientProfile from './../../assets/img/icons/patientProfile.png';

const data = [
	{
		title: 'Congestive Heart Failure'
	},
	{
		title: 'Congestive Heart Failure'
	},
	{
		title: 'Secondary Hypertension'
	}
];
// modal list data for table

const alertColumns = [
	{
		title: 'date',
		dataIndex: 'date'
		// render: (text) => <a>{text}</a>
	},
	{
		title: 'status',
		className: 'column-money',
		dataIndex: 'status'
	},
	{
		title: 'measurment',
		dataIndex: 'measurment'
	},
	{
		title: 'action',
		dataIndex: 'action'
	}
];

const dataAlert = [
	{
		key: '1',
		date: 'Today 14:24',
		status: 'Critical High',
		measurment: '100 bpm',
		action: 'Notified Caregiver, patient'
	},
	{
		key: '2',
		date: '21/2/2021',
		status: 'High',
		measurment: '100 bpm',
		action: 'Notified Caregiver, patient'
	},
	{
		key: '3',
		date: '21/2/2021',
		status: 'Critical High',
		measurment: '100 bpm',
		action: 'Notified Caregiver, patient'
	}
];

// second table
const actionColumns = [
	{
		id: '1',

		title: 'from',
		dataIndex: 'from'
		// render: (text) => <a>{text}</a>
	},
	{
		id: '2',

		title: 'action',
		className: 'column-money',
		dataIndex: 'action'
	},
	{
		id: '3',

		title: 'time',
		dataIndex: 'time'
	},
	{
		id: '4',

		title: 'action status',
		dataIndex: 'actionStatus'
	}
];

const actionHistory = [
	{
		id: '1',
		from: 'System',
		action: 'Change Sampling Rate',
		time: '21/11/2019 14:25',
		actionStatus: 'Pending'
	},
	{
		id: '2',
		from: 'System',
		action: 'Change Sampling Rate',
		time: '21/11/2019 14:25',
		actionStatus: 'Pending'
	},

	{
		id: '3',
		from: 'System',
		action: 'Change Sampling Rate',
		time: '21/11/2019 14:25',
		actionStatus: 'Pending'
	}
];
export class ModalAlertDetails extends Component {
	state = {
		item: {},
		loading: false
	};
	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, visible: false });
		}, 2000);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};
	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			item: nextProps.item
		};
	}

	//end modal function

	render() {
		const { firstName } = this.state.item;
		return (
			<Modal
				visible={this.props.visible}
				title="New Alert"
				centered
				style={{ top: 40 }}
				onOk={this.handleOk}
				onCancel={this.props.handleCancel}
				width={820}
				footer={false}
			>
				<div className="modal-body-details">
					<Row>
						<Col md={4} className="alert-left">
							<div className="alert-details">
								<div className="alert-details-title">
									<img src={heartAlert} alt="HeartRate" />
									<h3>
										Heart <br /> Rate
									</h3>
								</div>
								<div className="alert-details-note">
									<h4>Critcal High</h4>
									<h5>85 Pbm</h5>
									<span>Today , 14:24</span> <br />
									<p>Normal 60 :70 bpm</p>
								</div>
							</div>
							<div className="last-reading">
								<h5>Last Reading :</h5>
								<span>Today 14:24</span>
								<span>98%</span>
							</div>
							<div className="patient-details">
								<div className="media p-3">
									<img src={patientProfile} alt="John Doe" className="mr-3 mt-3 rounded-circle" />
									<div className="media-body mt-3">
										<h4>
											Jameel Jameel <br />
										</h4>
										<small>Male 64 Years</small>
									</div>
								</div>
								<div className="diagnoses">
									<h5>Diagnosis :</h5>
									<List
										itemLayout="horizontal"
										dataSource={data}
										renderItem={(item) => (
											<List.Item>
												<List.Item.Meta title={item.title} />
											</List.Item>
										)}
									/>,
								</div>
							</div>
						</Col>
						<Col md={8}>
							<div className="alert-right">
								<div className="alert-right-header">
									<p>
										You’ve got other alerts for <a href="">Jameel</a> right now.
									</p>
									<Button className="btn">More Details</Button>
								</div>
								<div className="alert-right-recent">
									<p>Jameel's Heart Rate Recent Alerts</p>
									<Table
										rowKey={(record) => record.id}
										columns={alertColumns}
										dataSource={dataAlert}
										bordered
										pagination={false}
									/>
								</div>
								<div className="actions-history">
									<p>Actions History</p>
									<Table
										rowKey={(record) => record.id}
										columns={actionColumns}
										dataSource={actionHistory}
										bordered
										pagination={false}
									/>
									<button key="back" onClick={this.handleCancel} className="btn">
										Back To Profile
									</button>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Modal>
		);
	}
}

export default Form.create()(ModalAlertDetails);
