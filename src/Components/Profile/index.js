import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, Icon, Table, Dropdown, Menu, InputNumber, Select, Checkbox, Button } from 'antd';
import {
	CardiacIcon,
	HemoDynamicIcon,
	BloodGlucoseIcon,
	HeartDynamicIcon,
	MegaPhoneIcon,
	EditIcon,
	CancelIcon,
	SaveIcon,
} from './../shared/Icons';
import { Line } from 'react-chartjs-2';
import DefaultTable from './../shared/Table';
import SideModal from './SideModal';

import './styles.scss';
import dataService from './../services/data.service';
import './styles.scss';
const HANDLE = 'patients';
const { Option } = Select;

const { TabPane } = Tabs;
const options = {
	scaleShowGridLines: true,
	scaleGridLineColor: 'rgba(0,0,0,.05)',
	scaleGridLineWidth: 1,
	scaleShowHorizontalLines: true,
	scaleShowVerticalLines: true,
	bezierCurve: true,
	bezierCurveTension: 0.4,
	pointDot: true,
	pointDotRadius: 4,
	pointDotStrokeWidth: 1,
	pointHitDetectionRadius: 20,
	datasetStroke: true,
	datasetStrokeWidth: 2,
	datasetFill: true,
	legendTemplate:
		'<ul className="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
};
const line = {
	labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets: [
		{
			label: 'My First dataset',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: [ 65, 59, 80, 81, 56, 55, 40 ],
		},
		{
			label: 'My Second dataset',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: [ 28, 48, 40, 19, 86, 27, 90 ],
		},
	],
};

const columns = [
	{
		title: 'Date & Time',
		dataIndex: 'name',
	},
	{
		title: 'Severity',
		className: 'column-money',
		dataIndex: 'money',
	},
];
const assignedCriteriaColumns = [
	{
		title: 'Critical (below)',
		dataIndex: 'critical',
	},
	{
		title: 'Low (below)',
		dataIndex: 'low',
	},
	{
		title: 'High (Above)',
		dataIndex: 'high',
	},
	{
		title: 'Critical (Above)',
		dataIndex: 'veryhigh',
	},
];

const data = [
	{
		key: '1',
		name: 'John Brown',
		money: '￥300,000.00',
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		money: '￥1,256,000.00',
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		money: '￥120,000.00',
		address: 'Sidney No. 1 Lake Park',
	},
];
const latestData = [
	{
		key: '1',
		name: 'John Brown',
		money: '￥300,000.00',
		address: 'New York No. 1 Lake Park',
	},
];
const assignedCriteria = [
	{
		key: '1',
		critical: '70 bpm',
		low: '75 bpm',
		high: '100 bpm',
		veryhigh: '120 bpm',
	},
];

const AlertData = [
	{
		key: '1',
		mrn: '#123456',
		firstName: 'Maha',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'female',
		alert: 'female',
		lastRead: '22/11/2021',
		status: 'unread',
	},
	{
		key: '2',
		mrn: '#123456',
		firstName: 'alaa',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'female',
		alert: 'female',
		lastRead: '22/11/2021',
		status: 'unread',
	},
	{
		key: '3',
		mrn: '#123456',
		firstName: 'soad',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'female',
		alert: 'female',
		lastRead: '22/11/2021',
		status: 'unread',
	},
	{
		key: '4',
		mrn: '#123456',
		firstName: 'amgad',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'female',
		alert: 'female',
		lastRead: '22/11/2021',
		status: 'unread',
	},
];

let checkboxDataCopy = {};

export class PatientProfile extends Component {
	state = {
		data: [],
		editCheckboxTable: false,
		checkboxTableData: {
			'notify-patient': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
			],
			'notify-caregiver': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
			],
			'notify-physician': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
			],
			'open-support-ticket': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
			],
			'change-sampling-rate': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
			],
		},
	};

	componentDidMount() {
		this.getData();
	}

	handleChange(item, index, dataType, value) {
		let { checkboxTableData } = this.state;
		let checkboxTableDataCopy = checkboxTableData;

		const newState = this.state.checkboxTableData[item].map((item, i) => {
			if (i === index) {
				return { ...item, [dataType]: value };
			}

			return item;
		});
		checkboxTableDataCopy[item] = newState;
		this.setState(
			{
				checkboxTableData: checkboxTableDataCopy,
			},
			() => {
				// console.log(this.state.checkboxTableData);
			},
		);
	}
	dynamicCheckboxTable() {
		const materialKeys = Object.keys(this.state.checkboxTableData);
		const { checkboxTableData } = this.state;
		var rows = materialKeys.map((item, i) => {
			var entry = checkboxTableData[item].map((row, index) => {
				return (
					<td key={index} style={{ backgroundColor: row.checked ? '#C9E0F1' : '#E5F0F8' }}>
						<Checkbox
							onChange={(e) => this.handleChange(item, index, 'checked', e.target.checked)}
							defaultChecked={row.checked}
						/>
						{row.checked && (
							<Dropdown
								trigger={[ 'click' ]}
								overlay={
									<Menu className="checkbox-menu">
										<div className="duration">
											<Select
												defaultValue={row.notify}
												placeholder="choose duration"
												style={{ width: '215px' }}
												onChange={(value) => this.handleChange(item, index, 'notify', value)}
											>
												<Option value="once">Once</Option>
												<Option value="Everytime">Everytime</Option>
												<Option value="everyPeriod">Every Period</Option>
												<Option value="everyNoOfOccurrences">Every no. of occurrences</Option>
											</Select>
										</div>
										{row.notify === 'everyPeriod' && (
											<div className="time">
												<InputNumber
													defaultValue={row.times}
													placeholder="choose number"
													min={1}
													max={100000}
													onChange={(value) => this.handleChange(item, index, 'times', value)}
												/>
												<Select
													defaultValue={row.every}
													placeholder="choose time"
													style={{ width: 120 }}
													onChange={(value) => this.handleChange(item, index, 'every', value)}
												>
													<Option value="minutes">minutes</Option>
													<Option value="hours">Hours</Option>
													<Option value="days">Days</Option>
												</Select>
											</div>
										)}
										{row.notify === 'everyNoOfOccurrences' && (
											<div className="time">
												<span className="mr-2">Every</span>
												<InputNumber
													defaultValue={row.times}
													placeholder="choose number"
													min={1}
													max={100000}
													onChange={(value) => this.handleChange(item, index, 'times', value)}
												/>
												Times
											</div>
										)}
									</Menu>
								}
							>
								<a className="ml-2 ant-dropdown-link" href="#">
									{(row.notify === 'once' || row.notify === 'Everytime') && (
										<span className="dropdownText">
											{row.notify}
											<Icon type="setting" />
										</span>
									)}
									{row.notify === 'everyPeriod' && (
										<span className="mr-2 dropdownText">
											Every {row.times} {row.every} <Icon type="setting" />
										</span>
									)}
									{row.notify === 'everyNoOfOccurrences' && (
										<span className="mr-2 dropdownText">
											Every {row.times} Times <Icon type="setting" />
										</span>
									)}
								</a>
							</Dropdown>
						)}
					</td>
				);
			});
			let itemLabel = item.split('-').join(' ');
			return (
				<tr key={i}>
					<td>
						<p className="text-dark m-0  font-weight-bold text-capitalize">{itemLabel}</p>
					</td>
					{entry}
				</tr>
			);
		});
		return (
			<table className="table table-bordered">
				<thead>
					<tr>
						<th />
						<th>C.Low</th>
						<th>Low</th>
						<th>High</th>
						<th>C.high</th>
						<th>Missed</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
	staticCheckboxTable() {
		const materialKeys = Object.keys(this.state.checkboxTableData);
		const { checkboxTableData } = this.state;
		var rows = materialKeys.map((item, i) => {
			var entry = checkboxTableData[item].map((row, index) => {
				return (
					<td key={index} style={{ backgroundColor: row.checked ? '#C9E0F1' : '#E5F0F8' }}>
						{row.checked ? (row.notify === 'once' || row.notify === 'Everytime') && row.notify : ''}

						{row.checked ? (
							row.notify === 'everyPeriod' && (
								<span className="mr-2">
									Every {row.times} {row.every}
								</span>
							)
						) : (
							''
						)}
						{row.checked ? (
							row.notify === 'everyNoOfOccurrences' && (
								<span className="mr-2">Every {row.times} Times</span>
							)
						) : (
							''
						)}
					</td>
				);
			});
			let itemLabel = item.split('-').join(' ');
			return (
				<tr key={i}>
					<td>
						<p className="text-dark m-0 font-weight-bold text-capitalize">{itemLabel}</p>
					</td>
					{entry}
				</tr>
			);
		});
		return (
			<table className="table table-bordered">
				<thead>
					<tr>
						<th />
						<th>C.Low</th>
						<th>Low</th>
						<th>High</th>
						<th>C.high</th>
						<th>Missed</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
	getData = () => {
		dataService.get(HANDLE).then((items) => {
			const monitoredPatients = items.filter((item) => item.assigned === true);

			this.setState({
				viewPatient: false,
				data: monitoredPatients,
			});
		});
	};

	render() {
		const defaultTableColumns = {
			mrn: true,
			firstName: true,
			lastName: true,
			diagnosis: false,
			gender: false,
			age: true,
			dateCreated: false,
			assignAction: false,
			referAction: false,
			selectable: false,
			clickable: false,
			abNormal: true,
			alert: true,
			lastRead: true,
			status: true,
			criticality: false,
			measurements: false,
		};

		return (
			<Container fluid={true}>
				<Row>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						{/* start card */}
						<div className="tab_card">
							<h3 className="card_heading">Diagnosis</h3>
							<div className="card_fields">
								<Row>
									<Col xl={4} lg={4} md={4} sm={4} xs={4}>
										<div className="field_item">
											<div className="item_Header">
												<CardiacIcon />
												<h4>Cardiac</h4>
											</div>

											<div className="item_body">
												<p>
													<span>AT12: </span> Coronary Artery Disease.
												</p>
												<p>
													<span>AT12: </span> Coronary Artery Disease.
												</p>
											</div>
										</div>
									</Col>
									<Col xl={4} lg={4} md={4} sm={4} xs={4}>
										<div className="field_item">
											<div className="item_Header">
												<HemoDynamicIcon /> <h4>Hemodynamic</h4>
											</div>

											<div className="item_body">
												<p>
													<span>AT12: </span> Coronary Artery Disease.
												</p>
												<p>
													<span>AT12: </span> Coronary Artery Disease.
												</p>
											</div>
										</div>
									</Col>
									<Col xl={4} lg={4} md={4} sm={4} xs={4}>
										<div className="field_item">
											<div className="item_Header">
												<BloodGlucoseIcon />
												<h4>Blood Glucose</h4>
											</div>

											<div className="item_body">
												<p>
													<span>AT12: </span> Coronary Artery Disease.
												</p>
												<p>
													<span>AT12: </span> Coronary Artery Disease.
												</p>
											</div>
										</div>
									</Col>
								</Row>
							</div>
						</div>
						{/* end card */}
					</Col>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						{/* start card */}
						<div className="tab_card patient-content-diagnosis">
							<h3 className="card_heading">
								<span>
									Measurements <span>(SpO2 - Heart Rate - Blood Pressure)</span>
								</span>

								<span>
									<Link className="edit-action" to="/assignMeasurment">
										<EditIcon />Edit
									</Link>
								</span>
							</h3>
							<div>
								<div className="recentVisits-Tabs">
									<Tabs defaultActiveKey="1">
										<TabPane
											tab={
												<div className="tab-title text-center">
													<div className="heading">
														<CardiacIcon className="badge-red" />
														<h4>Heart Rate</h4>
													</div>
													<p className="status text-red ">
														Critical High <br /> 110 bpm
													</p>
													<p className="date text-muted">22 Oct 2020</p>
													<div className="icon-dir">
														<Icon type="down" />
													</div>
												</div>
											}
											key="1"
										>
											<div className="tab-opened-body">
												<div className="tab-opened-header">
													<div className="tab_card">
														<h3 className="card_heading inside-tab">
															<span>
																<CardiacIcon /> Heart Rate -
																<span> Heart Rate monitoring</span>
															</span>

															<span>
																<Link className="edit-action" to="/assignMeasurment">
																	<MegaPhoneIcon /> Take Action
																</Link>
															</span>
														</h3>
													</div>
												</div>
												<div className="tab-opened-content">
													<Row>
														<Col
															className="preview-readings"
															xl={6}
															lg={6}
															md={6}
															sm={6}
															xs={6}
														>
															<h5>Previous Readings:</h5>
															<Table
																pagination={false}
																columns={columns}
																dataSource={data}
																bordered
															/>
															<h5 className="mt-3">Last Reading:</h5>
															<Table
																showHeader={false}
																pagination={false}
																columns={columns}
																dataSource={latestData}
																bordered
															/>
														</Col>
														<Col xl={6} lg={6} md={6} sm={6} xs={6}>
															<Line data={line} options={options} />
														</Col>
													</Row>
												</div>
												<div className="tab-opened-header mt-3">
													<div className="tab_card">
														<h3 className="card_heading inside-tab">
															<span>Assigned Criteria</span>

															<span>
																<Link className="edit-action" to="/assignMeasurment">
																	<EditIcon /> Edit
																</Link>
															</span>
														</h3>
													</div>
												</div>
												<div className="tab-opened-content assigned-criteria ">
													<Row>
														<Col
															className="preview-readings"
															xl={3}
															lg={3}
															md={3}
															sm={3}
															xs={3}
														>
															<h5>a. Measured every 2 hours</h5>
														</Col>
														<Col
															className="preview-readings"
															xl={1}
															lg={1}
															md={1}
															sm={1}
															xs={1}
														>
															<div className="divide" />
														</Col>

														<Col xl={8} lg={8} md={8} sm={8} xs={8}>
															<h5>Previous Readings:</h5>
															<Table
																size="small"
																pagination={false}
																columns={assignedCriteriaColumns}
																dataSource={assignedCriteria}
																bordered
															/>
														</Col>
													</Row>
												</div>
											</div>
										</TabPane>

										<TabPane
											tab={
												<div className="tab-title text-center">
													<div className="heading">
														<CardiacIcon className="badge-green" />
														<h4> Blood Pressure</h4>
													</div>
													<p className="status text-green ">
														Normal <br /> 70 bpm
													</p>
													<p className="date text-muted">22 Oct 2020</p>
													<div className="icon-dir">
														<Icon type="down" />
													</div>
												</div>
											}
											key="2"
										>
											<div className="tab-opened-body">
												<div className="tab-opened-header">
													<div className="tab_card">
														<h3 className="card_heading inside-tab">
															<span>
																<CardiacIcon /> Heart Rate -
																<span> Heart Rate monitoring</span>
															</span>

															<span>
																<Link className="edit-action" to="/assignMeasurment">
																	<MegaPhoneIcon /> Take Action
																</Link>
															</span>
														</h3>
													</div>
												</div>
												<div className="tab-opened-content">
													<Row>
														<Col
															className="preview-readings"
															xl={6}
															lg={6}
															md={6}
															sm={6}
															xs={6}
														>
															<h5>Previous Readings:</h5>
															<Table
																pagination={false}
																columns={columns}
																dataSource={data}
																bordered
															/>
															<h5 className="mt-3">Last Reading:</h5>
															<Table
																showHeader={false}
																pagination={false}
																columns={columns}
																dataSource={latestData}
																bordered
															/>
														</Col>
														<Col xl={6} lg={6} md={6} sm={6} xs={6}>
															<Line data={line} options={options} />
														</Col>
													</Row>
												</div>
												<div className="tab-opened-header mt-3">
													<div className="tab_card">
														<h3 className="card_heading inside-tab">
															<span>Assigned Criteria</span>

															<span>
																<Link className="edit-action" to="/assignMeasurment">
																	<EditIcon /> Edit
																</Link>
															</span>
														</h3>
													</div>
												</div>
												<div className="tab-opened-content assigned-criteria ">
													<Row>
														<Col
															className="preview-readings"
															xl={3}
															lg={3}
															md={3}
															sm={3}
															xs={3}
														>
															<h5>a. Measured every 2 hours</h5>
														</Col>
														<Col
															className="preview-readings"
															xl={1}
															lg={1}
															md={1}
															sm={1}
															xs={1}
														>
															<div className="divide" />
														</Col>

														<Col xl={8} lg={8} md={8} sm={8} xs={8}>
															<h5>Previous Readings:</h5>
															<Table
																size="small"
																pagination={false}
																columns={assignedCriteriaColumns}
																dataSource={assignedCriteria}
																bordered
															/>
														</Col>
													</Row>
												</div>
											</div>
										</TabPane>

										<TabPane
											tab={
												<div className="tab-title text-center">
													<div className="heading">
														<HeartDynamicIcon className="badge-yellow" />
														<h4>SpO2</h4>
													</div>
													<p className="status text-yellow ">
														High <br /> 80 bpm
													</p>
													<p className="date text-muted">22 Oct 2020</p>
													<div className="icon-dir">
														<Icon type="down" />
													</div>
												</div>
											}
											key="3"
										>
											<div className="tab-opened-body">
												<div className="tab-opened-header">
													<div className="tab_card">
														<h3 className="card_heading inside-tab">
															<span>
																<CardiacIcon />SpO2
															</span>

															<span>
																<Link className="edit-action" to="/assignMeasurment">
																	<MegaPhoneIcon /> Take Action
																</Link>
															</span>
														</h3>
													</div>
												</div>
												<div className="tab-opened-content">
													<Row>
														<Col
															className="preview-readings"
															xl={6}
															lg={6}
															md={6}
															sm={6}
															xs={6}
														>
															<h5>Previous Readings:</h5>
															<Table
																pagination={false}
																columns={columns}
																dataSource={data}
																bordered
															/>
															<h5 className="mt-3">Last Reading:</h5>
															<Table
																showHeader={false}
																pagination={false}
																columns={columns}
																dataSource={latestData}
																bordered
															/>
														</Col>
														<Col xl={6} lg={6} md={6} sm={6} xs={6}>
															<Line data={line} options={options} />
														</Col>
													</Row>
												</div>
												<div className="tab-opened-header mt-3">
													<div className="tab_card">
														<h3 className="card_heading inside-tab">
															<span>Assigned Criteria</span>

															<span>
																<Link className="edit-action" to="/assignMeasurment">
																	<EditIcon /> Edit
																</Link>
															</span>
														</h3>
													</div>
												</div>
												<div className="tab-opened-content assigned-criteria ">
													<Row>
														<Col
															className="preview-readings"
															xl={3}
															lg={3}
															md={3}
															sm={3}
															xs={3}
														>
															<h5>a. Measured every 2 hours</h5>
														</Col>
														<Col
															className="preview-readings"
															xl={1}
															lg={1}
															md={1}
															sm={1}
															xs={1}
														>
															<div className="divide" />
														</Col>

														<Col xl={8} lg={8} md={8} sm={8} xs={8}>
															<h5>Previous Readings:</h5>
															<Table
																size="small"
																pagination={false}
																columns={assignedCriteriaColumns}
																dataSource={assignedCriteria}
																bordered
															/>
														</Col>
													</Row>
												</div>
											</div>
										</TabPane>
									</Tabs>
								</div>
							</div>
						</div>
						{/* end card */}

						<div className="recentAlerts">
							<div className="tab_card">
								<h3 className="card_heading">Recent Alerts</h3>
								<div className="card_fields p-3">
									<DefaultTable
										{...defaultTableColumns}
										loading={this.state.loading}
										data={AlertData}
									/>
								</div>
							</div>
						</div>
						<div className="recentAlerts">
							<div className="tab_card">
								<h3 className="card_heading">
									<span>Actions</span>
									{this.state.editCheckboxTable ? (
										<span>
											<Button
												type="link"
												className="edit-action d-inline"
												onClick={() => {
													this.setState((prevState) => ({
														editCheckboxTable: !prevState.editCheckboxTable,
													}));
												}}
											>
												<SaveIcon /> Save
											</Button>
											<Button
												type="link"
												className="edit-action  d-inline"
												onClick={() => {
													console.log(checkboxDataCopy);
													this.setState(
														(prevState) => ({
															checkboxTableData: checkboxDataCopy,
															editCheckboxTable: !prevState.editCheckboxTable,
														}),
														() => {
															console.log(this.state.checkboxTableData);
														},
													);
												}}
											>
												<CancelIcon /> Cancel
											</Button>
										</span>
									) : (
										<span>
											<Button
												type="link"
												className="edit-action"
												onClick={() => {
													checkboxDataCopy = Object.assign({}, this.state.checkboxTableData);
													console.log(checkboxDataCopy);
													this.setState((prevState) => ({
														editCheckboxTable: !prevState.editCheckboxTable,
													}));
												}}
											>
												<EditIcon /> Edit
											</Button>
										</span>
									)}
								</h3>
								<div className="card_fields p-3">
									{this.state.editCheckboxTable ? (
										this.dynamicCheckboxTable()
									) : (
										this.staticCheckboxTable()
									)}
								</div>
							</div>
						</div>
					</Col>

					<Col xl={2} lg={2} md={2} sm={12} xs={12}>
						<SideModal />
					</Col>
				</Row>
			</Container>
		);
	}
}
export default PatientProfile;

console.clear();

// class Table extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       checkboxTableData: props.data
//     };
//   }

//   handleChange(index, dataType, value) {
//     const newState = this.state.checkboxTableData.map((item, i) => {
//       if (i == index) {
//         return {...item, [dataType]: value};
//       }
//       return item;
//     });

//     this.setState({
//        checkboxTableData: newState
//     });
//   }

//   render() {
//     console.clear();
//     console.log(JSON.stringify(this.state.checkboxTableData));
//     return (
//         <table className="table table-bordered">
//             <thead>
//                 <tr>
//                     <th>Qty</th>
//                     <th>Description</th>
//                     <th>Price (£)</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {this.state.checkboxTableData.map((row, index) => {
//                     return (
//                         <tr>
//                             <td>
//                               <input onChange={(e) => this.handleChange(index, 'qty', e.target.value)}
//                                      type='number'
//                                      className='form-control'
//                                      step='1' min="1"
//                                      value={this.state.checkboxTableData[index].qty}/>
//                             </td>
//                             <td>
//                               <input onChange={(e) => this.handleChange(index, 'desc', e.target.value)}
//                                      type='text'
//                                      className='form-control'
//                                      value={this.state.checkboxTableData[index].desc}/>
//                             </td>
//                             <td>
//                               <input onChange={(e) => this.handleChange(index, 'price', e.target.value)}
//                                      type='text'
//                                      className='form-control'
//                                      placeholder='6.00'
//                                      value={this.state.checkboxTableData[index].price}/>
//                             </td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     );
//   }
// }

// const checkboxTableData = [
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' },
//   { qty: '', desc: '', price: '' }
// ]

// ReactDOM.render(<Table data={checkboxTableData} />, document.getElementById('app'));
