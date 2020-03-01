import React, { Component } from 'react';
import Table from '../shared/Table';
import { Link } from 'react-router-dom';
import { Card, Pagination, Row, Col, List, Input, Divider, Button, Avatar, Tabs, Icon, Typography } from 'antd';
import dataService from './../services/data.service';
import './styles.scss';

import {
	ListViewIcon,
	MonitorViewIcon,
	CardiacIcon,
	BloodDropIcon,
	HeartDynamicIcon,
	WeightIcon,
	TempIcon
} from './../shared/Icons';
const { Title } = Typography;
var classNames = require('classnames');

const HANDLE = 'patients';
const { TabPane } = Tabs;

const monitoredPatientsData = [
	{
		key: '1',
		mrn: '#123456',
		firstName: 'Maha',
		lastName: 'ahmed',
		criticality: 'critical-high',

		measurements: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: true,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70'
			},
			{
				type: 'bga',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '80'
			},
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37'
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			}
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70'
			}
		],
		gender: 'female',
		age: '23',
		dateCreated: '21/10/2014'
	},
	{
		key: '2',
		mrn: '#123456',
		firstName: 'alaa',
		lastName: 'Mohamad',
		criticality: 'high',
		measurements: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: true,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70'
			},
			{
				type: 'bga',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '80'
			},
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37'
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			}
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70'
			}
		],
		gender: 'female',
		age: '23',
		dateCreated: '21/10/2014'
	},
	{
		key: '3',
		mrn: '#123456',
		firstName: 'soad',
		lastName: 'Mohamad',
		criticality: 'normal',
		measurements: [
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37'
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '130'
			}
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '130'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '70'
			}
		],
		gender: 'female',
		age: '23',
		dateCreated: '21/10/2014'
	},
	{
		key: '4',
		mrn: '#123456',
		firstName: 'amgad',
		lastName: 'Mohamad',
		criticality: 'critical-low',

		measurements: [
			{
				type: 'bpm',
				criticalLow: true,
				low: false,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '50'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: true,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '60'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '70'
			},
			{
				type: 'bga',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '80'
			},
			{
				type: 'bp',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'temp',
				criticalLow: false,
				low: false,
				normal: true,
				high: false,
				criticalHigh: false,
				value: '37'
			},
			{
				type: 'weight',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			}
		],
		alerts: [
			{
				type: 'bpm',
				criticalLow: false,
				low: false,
				normal: false,
				high: true,
				criticalHigh: false,
				value: '110'
			},
			{
				type: 'spo2',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: true,
				value: '130'
			},
			{
				type: 'bgb',
				criticalLow: false,
				low: false,
				normal: false,
				high: false,
				criticalHigh: false,
				value: '70'
			}
		],
		gender: 'male',
		age: '23',
		dateCreated: '21/10/2014'
	}
];

export default class MonitoredPatients extends Component {
	state = {
		loading: false,
		dataSource: monitoredPatientsData,
		nameSearch: '',
		minValue: 0,
		maxValue: 9,
		selectedPatients: monitoredPatientsData,
		viewPatient: false,
		activeTab: '1'
	};
	componentDidMount() {
		this.getData();
	}
	getData = () => {
		dataService.get(HANDLE).then((items) => {
			const monitoredPatients = items.filter((item) => item.assigned === true);
			// console.log(monitoredPatients);

			this.setState({
				viewPatient: false,
				data: monitoredPatients
			});
		});
	};
	rowClick = (item) => {
		this.props.history.push(`/monitoredPatients/${item.firstName}-${item.lastName}`);
	};
	handleChange = (value) => {
		if (value <= 1) {
			this.setState({
				minValue: 0,
				maxValue: 6
			});
		} else {
			this.setState({
				minValue: this.state.maxValue,
				maxValue: value * 6
			});
		}
	};
	getPatient = (item) => {
		// console.log(item);
		item.length === 0
			? this.setState({
					viewPatient: false,
					selectedPatients: item
				})
			: this.setState({
					viewPatient: true,
					selectedPatients: item
				});
	};
	changeTab = (activeKey) => {
		this.setState({
			activeTab: activeKey
		});
	};
	capitalize(s) {
		const text = s.split('-').join(' ');
		if (typeof text !== 'string') return '';
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	generateMA(items) {
		return items.map((item) => {
			let listItem = (
				<List.Item>
					<List.Item.Meta
						avatar={
							item.type === 'bpm' || item.type === 'spo2' ? (
								<CardiacIcon />
							) : item.type === 'bga' || item.type === 'bgb' ? (
								<BloodDropIcon />
							) : item.type === 'bp' ? (
								<HeartDynamicIcon />
							) : item.type === 'temp' ? (
								<TempIcon />
							) : item.type === 'weight' ? (
								<WeightIcon />
							) : (
								''
							)
						}
						title={item.type}
						description="12/10/2020"
					/>
					<div className="left-content">
						{item.value} {item.type}
					</div>
				</List.Item>
			);
			if (item.criticalLow) {
				return <div className="criticalLow">{listItem}</div>;
			}
			if (item.low) {
				return <div className="low">{listItem}</div>;
			}
			if (item.normal) {
				return <div className="normal">{listItem}</div>;
			}
			if (item.high) {
				return <div className="high">{listItem}</div>;
			}
			if (item.criticalHigh) {
				return <div className="criticalHigh">{listItem}</div>;
			}
		});
	}

	render() {
		const { selectedPatients, viewPatient, dataSource, minValue, maxValue, activeTab, loading } = this.state;
		const columns = {
			mrn: true,
			firstName: true,
			lastName: true,
			diagnosis: false,
			gender: true,
			age: true,
			dateCreated: true,
			assignAction: false,
			referAction: false,
			selectable: true,
			clickable: true,
			abNormal: false,
			alert: false,
			lastRead: false,
			status: false,
			criticality: true,
			measurements: true,
			deviceStatus: false,
			PatientsDeviceStatus: false,
			physician: false,
			patient: false,
			serial: false,
			model: false,
			type: false,
			mrnDevices: false
		};
		return (
			<div className="monitoredPatients">
				<Tabs onChange={this.changeTab} activeKey={activeTab}>
					<TabPane
						tab={
							<span>
								<ListViewIcon /> List View
							</span>
						}
						key="1"
					>
						{viewPatient && (
							<div className="extraAction">
								<Button type="primary" size={'large'} onClick={() => this.changeTab('2')}>
									View Patients
								</Button>
								<span className="selected-patients">
									<strong>You selected </strong>
									{selectedPatients.map((p, index) => (
										<span>
											{(index ? ', ' : '') + p.firstName} {p.lastName}
										</span>
									))}
								</span>
							</div>
						)}
						<Table
							{...columns}
							getPatient={this.getPatient}
							loading={loading}
							data={monitoredPatientsData}
							rowClick={this.rowClick}
						/>
					</TabPane>
					<TabPane
						tab={
							<span>
								<MonitorViewIcon /> Monitor View
							</span>
						}
						key="2"
					>
						<Row type="flex" className="searchComponent">
							<Col span={12}>
								<Input.Search
									placeholder="Search by name ..."
									allowClear
									onSearch={(nameSearch) =>
										this.setState({
											selectedPatients: monitoredPatientsData.filter((person) =>
												person.firstName.toLowerCase().includes(nameSearch.toLowerCase())
											)
										})}
								/>
							</Col>
						</Row>
						<Row gutter={16}>
							{selectedPatients &&
								selectedPatients.length > 0 &&
								selectedPatients.slice(minValue, maxValue).map((val) => {
									let criticality = val.criticality.toString().toLowerCase();
									let critical =
										criticality === 'critical-high' || criticality === 'critical-low'
											? 'border-red'
											: '';
									let high = criticality === 'high' || criticality === 'low' ? 'border-yellow' : '';
									let normal = criticality === 'normal' ? 'border' : '';
									let borderClasses = classNames(critical, high, normal);
									return (
										<Col className="gutter-row" span={6}>
											<Card className={borderClasses}>
												<List.Item className="user-badge  badge-bg">
													<Link
														className="patient-details"
														to={`/monitoredPatients/${val.firstName}-${val.lastName}`}
													>
														<List.Item.Meta
															avatar={
																<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
															}
															title={`${val.firstName} ${val.lastName}`}
															description={val.mrn}
														/>

														{criticality !== 'normal' && (
															<div className="bg highlight">
																{this.capitalize(val.criticality)}
															</div>
														)}
													</Link>
												</List.Item>
												<div className="list-wrapper">
													<Title className="list-title" level={4}>
														Measurements
													</Title>
													<Divider />
													{this.generateMA(val.measurements)}
													<Divider />
													<Title className="list-title" level={4}>
														Alerts
													</Title>
													<Divider />
													{this.generateMA(val.alerts)}
												</div>
											</Card>
										</Col>
									);
								})}
						</Row>
						<Pagination
							className="mt-3"
							defaultCurrent={1}
							defaultPageSize={6}
							onChange={this.handleChange}
							total={dataSource.length}
						/>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}
