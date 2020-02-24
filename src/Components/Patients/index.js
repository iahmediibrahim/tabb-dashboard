import React, { Component } from 'react';
import Table from '../shared/Table';
import { Select } from 'antd';

import './styles.scss';
import { NotAssignedIcon, DisabledIcon, ActiveIcon } from './../shared/Icons';
const { Option } = Select;

const PatientsData = [
	{
		key: '1',
		mrn: '#123456',
		firstName: 'Maha',
		lastName: 'ahmed',
		criticality: 'critical-high',
		deviceStatus: 'not-assigned',
		physician: 'Dr. Saleh khaled',
		measurements: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130',
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: true,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70',
			},
			{
				type: 'bga',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '80',
			},
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37',
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130',
			},
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130',
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70',
			},
		],
		gender: 'female',
		age: '23',
		dateCreated: '21/10/2014',
		status: 'new-patient',
	},
	{
		key: '2',
		mrn: '#123456',
		firstName: 'alaa',
		lastName: 'Mohamad',
		criticality: 'high',
		deviceStatus: 'active',
		physician: 'Dr. Saleh khaled',
		measurements: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130',
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: true,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70',
			},
			{
				type: 'bga',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '80',
			},
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37',
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130',
			},
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130',
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70',
			},
		],
		gender: 'female',
		age: '23',
		dateCreated: '21/10/2014',
		status: 'monitored-patient',
	},
	{
		key: '3',
		mrn: '#123456',
		firstName: 'soad',
		lastName: 'Mohamad',
		criticality: 'normal',
		deviceStatus: 'disabled',
		physician: 'Dr. Saleh khaled',
		measurements: [
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37',
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '130',
			},
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '110',
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '130',
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '70',
			},
		],
		gender: 'female',
		age: '23',
		dateCreated: '21/10/2014',
		status: 'monitored-patient',
	},
	{
		key: '4',
		mrn: '#123456',
		firstName: 'amgad',
		lastName: 'Mohamad',
		criticality: 'critical-low',
		deviceStatus: 'not-assigned',
		physician: 'Dr. Saleh khaled',
		measurements: [],
		alerts: [],
		gender: 'male',
		age: '23',
		dateCreated: '21/10/2014',
		status: 'new-patient',
	},
];

export default class Patients extends Component {
	state = {
		loading: false,
		dataSource: PatientsData,
		filterByStatus: 'all-patients',
	};
	rowClick = (item) => {
		this.props.history.push(`/patients/${item.firstName}-${item.lastName}`);
	};
	handleChange = (value) => {
		this.setState({ filterByStatus: value });
	};
	render() {
		const columns = {
			mrn: true,
			firstName: true,
			lastName: true,
			diagnosis: false,
			gender: false,
			age: true,
			dateCreated: true,
			assignAction: false,
			referAction: false,
			selectable: false,
			clickable: true,
			abNormal: false,
			alert: false,
			lastRead: false,
			status: false,
			criticality: false,
			measurements: true,
			deviceStatus: false,
			PatientsDeviceStatus: true,
			physician: true,
			patient: false,
			serial: false,
			model: false,
			type: false,
			mrnDevices: false,
		};
		const { dataSource, filterByStatus } = this.state;
		const filteredRowsByStatus = dataSource.filter((row) => {
			if (filterByStatus === 'all-patients') {
				return row;
			} else {
				return row.status === filterByStatus;
			}
		});
		return (
			<div>
				<div className="devices-header">
					<div>
						<span>Show: </span>
						<Select defaultValue="all-patients" style={{ width: 170 }} onChange={this.handleChange}>
							<Option value="all-patients">All Patients</Option>
							<Option value="monitored-patient">Monitored Patients</Option>
							<Option value="new-patient">New Patients</Option>
						</Select>
					</div>
					<div>
						<p className="active-status device-status pr-3  mb-0">
							<ActiveIcon />
							<span>Active</span>
						</p>
						<p className="disabled-status  device-status pr-3   mb-0">
							<DisabledIcon />
							<span>Disabled</span>
						</p>
						<p className="not-assigned  device-status mb-0">
							<NotAssignedIcon />
							<span>Not Assigned</span>
						</p>
					</div>
				</div>
				<Table {...columns} loading={this.state.loading} data={filteredRowsByStatus} rowClick={this.rowClick} />
			</div>
		);
	}
}
