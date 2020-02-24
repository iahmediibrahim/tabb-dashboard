import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CardiacTableChart from './../CardiacChart';
import BloodPressure from './../HemoDynamic/index';
import ChekboxsTable from './../CardiacChartSpo2/index';
import { CardiacIcon, HemoDynamicIcon, BloodDropIcon } from './../../shared/Icons';
import { Checkbox, Button } from 'antd';
import './styles.scss';

export class ChooseMeasurment extends Component {
	state = {
		HeartRateChecked: true,
		Spo2Checked: true,
		BloodPressure: true,
		TempChecked: false
	};
	onChange(checkedValues) {
		console.log('checked = ', checkedValues);
	}

	render() {
		const HeartRateLable = `${this.state.HeartRateChecked ? 'Heart Rate' : 'Heart Rate'}`;
		const oxygenSaturation = `${this.state.Spo2Checked ? 'oxygen saturation' : 'oxygen saturation'}`;
		const BloodPressureLable = `${this.state.BloodPressure ? 'Blood Pressure' : 'Blood Pressure'}`;
		const TempChecked = `${this.state.TempChecked ? 'Temp' : 'Temp'}`;

		return (
			<div className="choose_measurments">
				<h5>1. Choose Measurements</h5>
				<div className="measu_details">
					<Form>
						<Form.Group controlId="formGridCity">
							<Form.Label>I. Identify how long to monitor:</Form.Label>
							<Form.Control type="number" placeholder="2" />
							<Form.Control as="select">
								<option>weeks</option>
								<option>months</option>
								<option>years</option>
							</Form.Control>
							<p>
								start date: <span> 30 Feb 2019 </span>
							</p>
							<p>
								End date: <span> 2 Mar 2019 </span>
							</p>
						</Form.Group>

						<Form.Label> II. Choose Measurements </Form.Label>
						<h6> Suggested </h6>
						<div className="measu_checked">
							<Row className="suggested_measu">
								<Col xl={4} lg={4} md={4} sm={4} xs={4}>
									<Checkbox
										value="Heart Rate"
										className={
											this.state.HeartRateChecked ? 'checkedMeasurment' : 'unCheckedMeasurment'
										}
										checked={this.state.HeartRateChecked}
										onChange={(e) => {
											this.setState({
												HeartRateChecked: e.target.checked
											});
										}}
									>
										{HeartRateLable}
										<span>
											<CardiacIcon />
										</span>
									</Checkbox>
								</Col>
								<Col xl={4} lg={4} md={4} sm={4} xs={4}>
									<Checkbox
										value="Spo2"
										className={this.state.Spo2Checked ? 'checkedMeasurment' : 'unCheckedMeasurment'}
										checked={this.state.Spo2Checked}
										onChange={(e) => {
											this.setState({
												Spo2Checked: e.target.checked
											});
										}}
									>
										{oxygenSaturation}
										<span>
											<CardiacIcon />
										</span>
									</Checkbox>
								</Col>
								<Col xl={4} lg={4} md={4} sm={4} xs={4}>
									<Checkbox
										value="Blood Pressure"
										className={
											this.state.BloodPressure ? 'checkedMeasurment' : 'unCheckedMeasurment'
										}
										checked={this.state.BloodPressure}
										onChange={(e) => {
											this.setState({
												BloodPressure: e.target.checked
											});
										}}
									>
										{BloodPressureLable}
										<span>
											<CardiacIcon />
										</span>
									</Checkbox>
								</Col>
							</Row>
						</div>

						<h6> More </h6>
						<div className="measu_checked">
							<Row className="suggested_measu">
								<Col xl={4} lg={4} md={4} sm={4} xs={4}>
									<Checkbox
										value="Heart Rate"
										className={this.state.TempChecked ? 'checkedMeasurment' : 'unCheckedMeasurment'}
										checked={this.state.TempChecked}
										onChange={(e) => {
											this.setState({
												TempChecked: e.target.checked
											});
										}}
									>
										{TempChecked}
										<span>
											<CardiacIcon />
										</span>
									</Checkbox>
								</Col>
							</Row>
						</div>
					</Form>
				</div>
				<div className="checked_Comp">
					{/* review-reading" */}
					<div className="review-reading">
						{this.state.HeartRateChecked && <CardiacTableChart />}
						{this.state.Spo2Checked && <ChekboxsTable />}
						{this.state.BloodPressure && <BloodPressure />}
					</div>
					{/* end-reading" */}
				</div>
			</div>
		);
	}
}

export default ChooseMeasurment;
