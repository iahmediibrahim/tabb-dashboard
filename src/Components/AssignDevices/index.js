import React, { Component } from 'react';
import Profile from './../Profile/SideModal';
import DiagnosesCard from './../new-patient/DiagnosesCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Checkbox, Button, Form } from 'antd';
import './styles.scss';

function onChange(checkedValues) {
	console.log('checked = ', checkedValues);
}

export default class AssignDevice extends Component {
	state = {
		addHeartDeviceItem: false,
		addBloodDeviceItem: false,
		HeartDeviceName: '',
		BloodDeviceName: '',
		Heartmeasure: '',
		BloodMeasure: '',
		disabled: true
	};
	// click item hidden devices List  and return selected device details
	onAddItem = (e, measure, text) => {
		console.log(e.target.value, measure);

		if (text == 'HeartRate') {
			this.setState({
				addHeartDeviceItem: true,
				HeartDeviceName: e.target.value,
				Heartmeasure: measure
			});
		} else if (text == 'BloodPressure') {
			this.setState({
				addBloodDeviceItem: true,
				BloodDeviceName: e.target.value,
				BloodMeasure: measure
			});
		}
		if (this.state.addBloodDeviceItem == false && this.state.addHeartDeviceItem == false) {
			this.setState({
				disabled: false
			});
		}
	};
	// click edit hidden  selected device details  and return devices List
	onEditItem() {
		this.setState({
			addHeartDeviceItem: false,
			addBloodDeviceItem: false
		});
	}
	// Daevice Value as name split -
	capitalize(s) {
		const text = s.split('-').join(' ');
		if (typeof text !== 'string') return '';
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	// submit button after choosing Devices
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	render() {
		// Blood Pressure Devices
		const devices = [
			{
				id: 1,
				value: 'ABCDF-Heart-Monitor-Simulator',
				src: './../../img/layout/HeartRateDevice.png',
				name: 'ABCDF Heart Monitor Simulator',
				measure: 'Heart Rate',
				description: 'ABCDF Heart Monitor Simulator measurs Heart Rate',
				itemsInStock: '5'
			},
			{
				id: 2,
				value: 'Spo2-Monitor-Simulator',
				src: './../../img/layout/HeartRateDevice.png',
				name: 'Nonin Pulse Oximeter 3230',
				measure: 'Spo2 Rate',
				description: 'ABCDF Heart Monitor Simulator measurs Heart Rate',
				itemsInStock: '7'
			},
			{
				id: 3,
				value: 'ABCDF-Heart-Monitor',
				src: './../../img/layout/HeartRateDevice.png',
				name: 'Spo2 Simulator',
				measure: 'Heart Rate',
				description: 'ABCDF Heart Monitor Simulator measurs Heart Rate',
				itemsInStock: '9'
			}
		];
		// other Device

		const BloodDevices = [
			{
				id: 7,
				value: 'Omron-10-Blood-Pressure',
				src: './../../img/layout/bllodPressure.png',
				name: 'Omron 10 Blood Pressure Monitor',
				measure: 'Spo2 Rate',
				description: 'ABCDF Heart Monitor Simulator measurs Blood Pressure',
				itemsInStock: '11'
			},
			{
				id: 8,
				value: 'Care-Touch-Blood-Pressure-Monitor-Cuff',
				src: './../../img/layout/bllodPressure.png',
				name: 'Care Touch Blood Pressure Monitor Cuff',
				measure: 'Spo2 Rate',
				description: 'ABCDF Heart Monitor Simulator measurs Blood Pressure',
				itemsInStock: '13'
			},
			{
				id: 8,
				value: 'Omron-10-Blood-Pressure-Monitor',
				src: './../../img/layout/bllodPressure.png',
				name: 'Spo2 Simulator',
				measure: 'Spo2 Rate',
				description: 'ABCDF Heart Monitor Simulator measurs Blood Pressure',
				itemsInStock: '15'
			}
		];
		const { addHeartDeviceItem, addBloodDeviceItem } = this.state;

		return (
			<Container fluid={true}>
				<Row>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						<DiagnosesCard />

						<div className="assignPatientDevices">
							<Form onSubmit={this.handleSubmit}>
								{/* Heart Rate Device */}
								<h3>1. Assign Devices</h3>
								<h4>I. Oxygen Saturation & Heart Rate</h4>

								{addHeartDeviceItem ? (
									<div className="selected-device">
										<p>
											You choosed
											<span>{this.capitalize(this.state.HeartDeviceName)}</span> For Monitoring
											Jameel's {this.state.Heartmeasure}
										</p>
										<button onClick={(e) => this.onEditItem(e, this.state.addBloodDeviceItem)}>
											edit
										</button>
									</div>
								) : (
									<Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
										<p>Choose a suitable Heart Monitor Simulator and/or Pulse Oximeter</p>

										<Row>
											{devices.map((device) => {
												return (
													<Col md={4}>
														<div className="device-card-content" key={device.id}>
															<Checkbox
																onChange={(e) =>
																	this.onAddItem(e, device.measure, 'HeartRate')}
																value={device.value}
															>
																{device.name}
															</Checkbox>

															<div className="device-details">
																<div className="device-details-left-side">
																	<h4>
																		<span>measures : </span>
																		{device.measure}
																	</h4>

																	<h5> (In stock: {device.itemsInStock}) </h5>
																</div>
																<div className="device-details-right-side">
																	<img src={device.src} alt={device.name} />
																</div>
															</div>
														</div>
													</Col>
												);
											})}
										</Row>
									</Checkbox.Group>
								)}

								{/* Other Device */}
								<h4>II. Blood Pressure</h4>
								{addBloodDeviceItem ? (
									<div className="selected-device">
										<p>
											You choosed
											<span>{this.capitalize(this.state.BloodDeviceName)}</span> For Monitoring
											Jameel's {this.state.BloodMeasure}
										</p>
										<button onClick={(e) => this.onEditItem(e, this.state.addBloodDeviceItem)}>
											edit
										</button>
									</div>
								) : (
									<Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
										<p>Choose a suitable Blood Pressure Monitor.</p>

										<Row>
											{BloodDevices.map((BloodDevice) => {
												return (
													<Col md={4}>
														<div className="device-card-content" key={BloodDevice.id}>
															<Checkbox
																onChange={(e) =>
																	this.onAddItem(
																		e,
																		BloodDevice.measure,
																		'BloodPressure'
																	)}
																value={BloodDevice.value}
															>
																{BloodDevice.name}
															</Checkbox>

															<div className="device-details">
																<div className="device-details-left-side">
																	<h4>
																		<span>measures : </span>
																		{BloodDevice.measure}
																	</h4>

																	<h5> (In stock: {BloodDevice.itemsInStock}) </h5>
																</div>
																<div className="device-details-right-side">
																	<img src={BloodDevice.src} alt={BloodDevice.name} />
																</div>
															</div>
														</div>
													</Col>
												);
											})}
										</Row>
									</Checkbox.Group>
								)}
								<Button type="primary" htmlType="submit" disabled={this.state.disabled}>
									Submit
								</Button>
							</Form>
						</div>
					</Col>
					<Col xl={2} lg={2} md={12} sm={12} xs={12}>
						<Profile />
					</Col>
				</Row>
			</Container>
		);
	}
}
