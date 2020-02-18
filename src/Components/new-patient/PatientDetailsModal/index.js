import React, { Component } from 'react';
import { Form, Table, Button, Modal, List } from 'antd';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { QuestionMarkIcon, CardiacIcon, BloodDropIcon, AssignIcon, ReferIcon, CallIcon } from './../../shared/Icons';
import 'antd/dist/antd.css';
import './styles.scss';

// modal list data for table

export class PatientDetailsModal extends Component {
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
		const {
			firstName,
			lastName,
			age,
			gender,
			mrn,
			mobile,
			CaregiverName,
			CaregiverPhone,
			min,
			nhid,
			PatientAddress
		} = this.state.item;
		return (
			<Modal
				visible={this.props.visible}
				title="Patients Information"
				centered
				onOk={this.handleOk}
				onCancel={this.props.handleCancel}
				width={820}
				footer={false}
			>
				<div className="patient-details-modal">
					<div className="patient-modal-header">
						<Row>
							<Col md={4} sm={6} xs={6}>
								<div>
									<h4>MRN</h4>
									<QuestionMarkIcon />
									<span> {mrn}</span>
								</div>
							</Col>
							<Col md={4} sm={6} xs={6}>
								<div>
									<h4>MIN</h4>
									<QuestionMarkIcon />
									<span> {min}</span>
								</div>
							</Col>
							<Col md={4} sm={6} xs={6}>
								<div>
									<h4>NHID</h4>
									<QuestionMarkIcon />
									<span> {nhid}</span>
								</div>
							</Col>
						</Row>
					</div>
					<div className="patient-modal-content">
						<Row>
							<Col xl={7} lg={7} md={7} sm={12} xs={12}>
								<h5>
									Name:
									<span>
										{firstName} {lastName}
									</span>
								</h5>
								<h5>
									Age : <span>{age}</span>
								</h5>
								<h5>
									Gender : <span>{gender} </span>
								</h5>
								<h5>
									Mobile :
									<span>{mobile}</span>
									<CallIcon />
								</h5>
								<h5>
									Caregiver Name:
									<span>{CaregiverName}</span>
								</h5>
								<h5>
									Caregiver Phone :
									<span>{CaregiverPhone}</span>
									<CallIcon />
								</h5>

								<h5>
									Patient’s Addres:
									<span>
										<a>{PatientAddress}</a>
									</span>
								</h5>
							</Col>
							<Col xl={5} lg={5} md={5} sm={12} xs={12}>
								<div className="patient-diagnoses">
									<h4>Diagnosis :</h4>
									<div className="diagnoses-type">
										<BloodDropIcon /> <h3>Hemodynamic</h3>
										<h6>AS85: Congestive Heart Failure.</h6>
										<h6>AS85: Congestive Heart Failure.</h6>
										<BloodDropIcon /> <h3>Cardiac</h3>
										<h6>AS85: Congestive Heart Failure.</h6>
										<h6>AS85: Congestive Heart Failure.</h6>
									</div>
								</div>
							</Col>
						</Row>
						<div className="patient-modal-footer">
							<button type="btn">
								<Link to="/assignMeasurment">
									Assign <AssignIcon />
								</Link>
							</button>
							<button type="btn">
								Refer <ReferIcon />
							</button>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

export default Form.create()(PatientDetailsModal);
