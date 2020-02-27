import React, { Component } from 'react';
import Table from '../shared/Table';
import { Button } from 'antd';
import NewDeviceModal from './NewDeviceModal';
import './styles.scss';

const DevicesData = [
	{
		key: '1',
		mrn: '#123456',
		serial: '#123456',
		model: 'Nonin Pulse Oximeter 3230',
		type: 'Hemodynamic',
		patient: 'critical-high',
		deviceStatus: 'active',
	},
	{
		key: '2',
		mrn: '#123456',
		serial: '#123456',
		model: 'Nonin Pulse Oximeter 3230',
		type: 'Hemodynamic',
		patient: 'critical-high',
		deviceStatus: 'active',
	},
	{
		key: '3',
		mrn: '#123456',
		serial: '#123456',
		model: 'Nonin Pulse Oximeter 3230',
		type: 'Hemodynamic',
		patient: 'critical-high',
		deviceStatus: 'disabled',
	},
	{
		key: '4',
		mrn: '#123456',
		serial: '#123456',
		model: 'Nonin Pulse Oximeter 3230',
		type: 'Hemodynamic',
		patient: 'critical-high',
		deviceStatus: 'active',
	},
];

export default class Patients extends Component {
	state = {
		loading: false,
		dataSource: DevicesData,
	};
	rowClick = (item) => {
		this.props.history.push(`/monitoredPatients/${item.firstName}-${item.lastName}`);
	};
	handleClick = () => {
		this.setState({
			visible: true,
		});
	};
	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};
	render() {
		const columns = {
			mrn: false,
			firstName: false,
			lastName: false,
			diagnosis: false,
			gender: false,
			age: false,
			dateCreated: false,
			assignAction: false,
			referAction: false,
			selectable: false,
			clickable: false,
			abNormal: false,
			alert: false,
			lastRead: false,
			status: false,
			criticality: false,
			measurements: false,
			deviceStatus: true,
			PatientsDeviceStatus: false,
			physician: false,
			patient: true,
			serial: true,
			model: true,
			type: true,
			mrnDevices: true,
		};
		return (
			<div>
				<div className="devices-header">
					<h4>Assigned Devices</h4>
					<Button onClick={this.handleClick} type="primary">
						New Device
					</Button>
				</div>
				<NewDeviceModal visible={this.state.visible} handleCancel={this.handleCancel} />

				<Table
					{...columns}
					loading={this.state.loading}
					data={this.state.dataSource}
					rowClick={this.rowClick}
				/>
			</div>
		);
	}
}
