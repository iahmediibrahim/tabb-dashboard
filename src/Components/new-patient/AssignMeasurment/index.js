import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import DiagnosesCard from './../DiagnosesCard';
import ChooseMeasurment from './../ChooseMeasurment';
import CardiacTableChart from './../CardiacChart';
import BloodPressure from './../HemoDynamic';
import ChekboxsTable from './../CardiacChartSpo2/index';
// import Checkbox from './../../ui-inputs/Checkbox';
import Profile from '../../Profile/SideModal';
import { Tabs, Icon, Table, Dropdown, Menu, InputNumber, Select, Checkbox, Button } from 'antd';
import {
	CardiacIcon,
	HemoDynamicIcon,
	BloodGlucoseIcon,
	HeartDynamicIcon,
	MegaPhoneIcon,
	EditIcon,
	CancelIcon,
	SaveIcon
} from './../../shared/Icons';
import './styles.scss';
let checkboxDataCopy = {};
const { Option } = Select;

export class AssignMeasurment extends Component {
	state = {
		checked: false,
		editCheckboxTable: false,
		checkboxTableData: {
			'notify-patient': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' }
			],
			'notify-caregiver': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' }
			],
			'notify-physician': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' }
			],
			'open-support-ticket': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' }
			],
			'change-sampling-rate': [
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: true, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' },
				{ checked: false, notify: 'Everytime', times: 2, every: 'hours' }
			]
		}
	};
	handleCheckClick = () => {
		this.setState({ checked: !this.state.checked });
	};

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
				checkboxTableData: checkboxTableDataCopy
			},
			() => {
				// console.log(this.state.checkboxTableData);
			}
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
	render() {
		return (
			<Container fluid={true}>
				<Row>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						<DiagnosesCard />
						<ChooseMeasurment />

						{/* review-reading" */}
						<div className="review-reading">
							<ChekboxsTable />
							<CardiacTableChart />
							<BloodPressure />
						</div>
						{/* end-reading" */}
					</Col>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						<div className="recentAlerts">
							<div className="tab_card">
								<h3 className="card_title">
									<span>Actions</span>
									{this.state.editCheckboxTable ? (
										<span>
											<Button
												type="link"
												className="edit-action d-inline"
												onClick={() => {
													this.setState((prevState) => ({
														editCheckboxTable: !prevState.editCheckboxTable
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
															editCheckboxTable: !prevState.editCheckboxTable
														}),
														() => {
															console.log(this.state.checkboxTableData);
														}
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
														editCheckboxTable: !prevState.editCheckboxTable
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
						<Profile />
					</Col>
				</Row>
			</Container>
		);
	}
}
export default AssignMeasurment;
