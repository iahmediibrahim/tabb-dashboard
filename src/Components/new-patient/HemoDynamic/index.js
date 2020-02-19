import React, { Component } from 'react';
import { Icon } from 'antd';
import { Row, Col } from 'react-bootstrap';
import CardiacChart from './Chart';
import ActionCell from './Action';
import { HemoDynamicIcon } from './../../shared/Icons';
import './styles.scss';

class BloodPressure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			systolic_actions: [],
			systolic_saved_actions: [],
			diastolic_actions: [],
			diastolic_initial_actions: []
		};
	}
	componentDidMount() {
		//Systolic intial values
		const systolic_initial_actions = [
			{
				id: 1,
				in_value: 120
			},
			{
				id: 2,
				in_value: 140
			},
			{
				id: 3,
				in_value: 160
			},
			{
				id: 4,
				in_value: 200
			}
		];

		// Diastolic intial values
		const diastolic_initial_actions = [
			{
				id: 5,
				in_value: 75
			},
			{
				id: 6,
				in_value: 80
			},
			{
				id: 7,
				in_value: 90
			},
			{
				id: 8,
				in_value: 100
			}
		];

		this.setState({
			//	systolic_actions
			systolic_actions: JSON.parse(JSON.stringify(systolic_initial_actions)),
			systolic_saved_actions: JSON.parse(JSON.stringify(systolic_initial_actions)),
			//
			diastolic_actions: JSON.parse(JSON.stringify(diastolic_initial_actions)),
			diastolic_saved_actions: JSON.parse(JSON.stringify(diastolic_initial_actions))
		});
		console.log(this.state.systolic_initial_actions);
	}
	updateActionData = (ActionID, name, actionData) => {
		var systolic = [ ...this.state.systolic_actions ];
		var diastolic = [ ...this.state.diastolic_actions ];

		systolic = systolic.map((data) => {
			if (data.id == ActionID) {
				data[name] = actionData[name];
			}
			return data;
		});
		diastolic = diastolic.map((data) => {
			if (data.id == ActionID) {
				data[name] = actionData[name];
			}
			return data;
		});
		console.log('update', systolic, diastolic);
		this.setState({
			systolic_actions: systolic,
			diastolic_actions: diastolic
		});
	};
	renderHeaderButtons = () => {
		const {
			edit,
			systolic_actions,
			systolic_saved_actions,
			diastolic_actions,
			diastolic_saved_actions
		} = this.state;
		if (edit) {
			return (
				<React.Fragment>
					<button
						className="btn btn-transparent text-white weight-600 font-Lsmall mx-1"
						onClick={() => {
							this.setState({
								edit: false,
								systolic_saved_actions: JSON.parse(JSON.stringify(systolic_actions)),
								diastolic_saved_actions: JSON.parse(JSON.stringify(diastolic_actions))
							});
						}}
					>
						<Icon type="save" /> Save
					</button>
					<button
						className="btn btn-transparent text-white weight-600 font-Lsmall mx-1"
						onClick={() => {
							this.setState({
								edit: false,
								systolic_actions: JSON.parse(JSON.stringify(systolic_saved_actions)),

								diastolic_actions: JSON.parse(JSON.stringify(diastolic_saved_actions))
							});
						}}
					>
						<Icon type="stop" /> Cancel
					</button>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<button
						className="btn btn-transparent text-white weight-600 font-Lsmall"
						onClick={() => {
							this.setState({ edit: true });
						}}
					>
						<Icon type="edit" /> Edit
					</button>
				</React.Fragment>
			);
		}
	};
	//1
	renderActionCells = () => {
		return (
			<React.Fragment>
				{this.state.systolic_actions.map((value, key) => (
					<React.Fragment key={key}>
						<td>
							<ActionCell
								disabled={!this.state.edit}
								data={value}
								index={key}
								updateActionData={this.updateActionData}
							/>
						</td>
					</React.Fragment>
				))}
			</React.Fragment>
		);
	};
	//diastolic

	renderDiastolicActionCells = () => {
		return (
			<React.Fragment>
				{this.state.diastolic_actions.map((value, key) => (
					<React.Fragment key={key}>
						<td>
							<ActionCell
								disabled={!this.state.edit}
								data={value}
								index={key}
								updateActionData={this.updateActionData}
							/>
						</td>
					</React.Fragment>
				))}
			</React.Fragment>
		);
	};

	render() {
		return (
			<React.Fragment>
				<div className="cardiac-chart">
					<div className="tab_card">
						<div className="card_heading">
							<h3>
								<span>
									<HemoDynamicIcon />
								</span>
								Hemodynamic - Blood Pressure
							</h3>
							<span>{this.renderHeaderButtons()}</span>
						</div>

						<div className="card_fields">
							<Row>
								<Col md={4} className="cardiac-left-side">
									<div>
										<h4>a. Measured every 2 hours</h4>
									</div>
								</Col>
								<Col md={8} className="cardiac-right-side">
									<h4>b. The predefined readings:</h4>
									<table className="table">
										<thead>
											<tr>
												<th>Critical (below)</th>
												<th>Low (below)</th>
												<th>High (Above)</th>
												<th>Critical (High)</th>
											</tr>
										</thead>
										<tbody>
											<tr>{this.renderActionCells()}</tr>
										</tbody>
									</table>
									<table className="table">
										<thead>
											<tr>
												<th>Critical (below)</th>
												<th>Low (below)</th>
												<th>High (Above)</th>
												<th>Critical (High)</th>
											</tr>
										</thead>
										<tbody>
											<tr>{this.renderDiastolicActionCells()}</tr>
										</tbody>
									</table>
									<div className="hemoDynamiChart">
										<CardiacChart
											diastolic_chart_data={this.state.diastolic_saved_actions}
											systolic_chart_data={this.state.systolic_saved_actions}
										/>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BloodPressure;
