import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, List, Icon, Table } from 'antd';
import { CardiacIcon, HeartDynamicIcon, MegaPhoneIcon, EditIcon, DisabledIcon, ActiveIcon } from './../shared/Icons';
import DiagnosesCard from './../new-patient/DiagnosesCard';

import { Line } from 'react-chartjs-2';
import DefaultTable from './../shared/Table';
import SideModal from './SideModal';

import './styles.scss';
import dataService from './../services/data.service';
import './styles.scss';
import EditableCheckboxTable from '../shared/EditableCheckboxTable';
const HANDLE = 'patients';

const { TabPane } = Tabs;
const options = {
	bezierCurveTension: 0.4,
	scales: {
		xAxes: [
			{
				gridLines: {
					display: false,
					drawBorder: true,
				},
			},
		],
		yAxes: [
			{
				gridLines: {
					display: true,
					drawBorder: true,
				},
			},
		],
	},
	legendTemplate:
		'<ul className="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
};
const line = {
	labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
	datasets: [
		{
			label: 'My First dataset',
			borderWidth: 2,
			data: [ 65, 59, 80, 81, 56, 55, 40 ],
		},
		{
			label: 'My Second dataset',
			borderColor: '#8992AD',
			pointBackgroundColor: '#8992AD',
			borderWidth: 2,
			data: [ 28, 48, 40, 19, 86, 27, 90 ],
		},
	],
};

const columns = [
	{
		title: 'Date & Time',
		dataIndex: 'name',
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: [ 'descend', 'ascend' ],
	},
	{
		title: 'Severity',
		className: 'column-money',
		dataIndex: 'money',
		sorter: (a, b) => a.money.length - b.money.length,
		sortDirections: [ 'descend', 'ascend' ],
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
		abNormal: 'heart-rate',
		criticality: 'high',

		alert: [
			{
				type: '',
				value: '120bpm',
				criticality: 'high',
			},
		],
		lastRead: '22/11/2021',
		status: 'unread',
	},
	{
		key: '2',
		mrn: '#123456',
		firstName: 'alaa',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'SpO2',
		lastRead: '22/11/2021',
		status: 'unread',
		criticality: 'high',

		alert: [
			{
				type: '',
				value: '120%',
				criticality: 'high',
			},
		],
	},
	{
		key: '3',
		mrn: '#123456',
		firstName: 'soad',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'Bl.Pressure',
		criticality: 'critical-low',

		alert: [
			{
				type: '',
				value: '115mmHg',
				criticality: 'critical-low',
			},
		],
		lastRead: '22/11/2021',
		status: 'unread',
	},
	{
		key: '4',
		mrn: '#123456',
		firstName: 'amgad',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'BG(b.meal)',
		criticality: 'critical-high',

		alert: [
			{
				type: '',
				value: '163/105',
				criticality: 'critical-high',
			},
		],
		lastRead: '22/11/2021',
		status: 'unread',
	},
	{
		key: '5',
		mrn: '#123456',
		firstName: 'amgad',
		lastName: 'ahmed',
		age: '23',
		abNormal: 'motion',
		criticality: 'critical-high',

		alert: [
			{
				type: 'fail',
				value: '',
				criticality: 'critical-high',
			},
		],
		lastRead: '22/11/2021',
		status: 'unread',
	},
];
const assignedDevicesList = [
	{
		title: 'For SpO2 & Heart Rate',
		description: 'Nonin Pulse Oximeter 3230',
		state: 'active',
	},
	{
		title: 'For Blood Pressure',
		description: 'Care Touch Blood Pressure Monitor Cuff',
		state: 'disabled',
	},
];

export class PatientProfile extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		this.getData();
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
		const path = this.props.location.pathname.slice(1).split('/')[0];
		const alertTableColumns = {
			mrn: false,
			firstNameAction: false,
			lastNameAction: false,
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
			abNormal: true,
			alert: true,
			lastRead: true,
			status: true,
			criticality: true,
			measurements: false,
			deviceStatus: false,
			PatientsDeviceStatus: false,
			physician: false,
			patient: false,
			serial: false,
			model: false,
			type: false,
			mrnDevices: false,
		};

		return (
			<Container fluid={true}>
				<Row>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						<DiagnosesCard />
					</Col>
					{path === 'patients' && (
						<Col xl={10} lg={10} md={10} sm={12} xs={12}>
							<div className="d-flex justify-content-between" style={{ marginTop: -20 }}>
								<p>
									Monitor Period: <strong>2 years</strong>
								</p>
								<p>
									Start Date: <strong>23 Oct years</strong>
								</p>
								<p>
									End Date: <strong>23 Mar 2020</strong>
								</p>
							</div>
							<div className="tab_card">
								<h3 className="card_title">Assigned Devices</h3>
								<div className="card_fields">
									<List
										className="assignedDevicesList"
										itemLayout="horizontal"
										dataSource={assignedDevicesList}
										renderItem={(item) => (
											<List.Item>
												<List.Item.Meta
													title={item.title}
													description={
														item.state === 'active' ? (
															<p>
																{item.description} <ActiveIcon />
															</p>
														) : (
															<p>
																{item.description} <DisabledIcon />
															</p>
														)
													}
												/>
											</List.Item>
										)}
									/>
								</div>
							</div>
						</Col>
					)}

					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						{/* start card */}
						<div className="tab_card patient-content-diagnosis">
							<h3 className="card_title">
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
														<h3 className="card_title inside-tab">
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
														<h3 className="card_title inside-tab">
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
														<h3 className="card_title inside-tab">
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
														<h3 className="card_title inside-tab">
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
														<h3 className="card_title inside-tab">
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
														<h3 className="card_title inside-tab">
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
								<h3 className="card_title">Recent Alerts</h3>
								<div className="card_fields p-3">
									<DefaultTable
										{...alertTableColumns}
										loading={this.state.loading}
										data={AlertData}
									/>
								</div>
							</div>
						</div>
						<div className="recentAlerts">
							<EditableCheckboxTable />
						</div>
					</Col>

					<Col xl={2} lg={2} md={2} sm={12} xs={12}>
						<SideModal physician={'physician name'} />
					</Col>
				</Row>
			</Container>
		);
	}
}
export default PatientProfile;
