import React, { Component } from 'react';
import { EditIcon, CancelIcon, SaveIcon } from './../../shared/Icons';
import { Row, Col } from 'react-bootstrap';
import CardiacChart from './Chart';
import ActionCell from './Action';
import { CardiacIcon } from './../../shared/Icons';
import './styles.scss';

class CardiacTableChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			actions: [],
			saved_actions: [],
		};
	}
	componentDidMount() {
		const initial_actions = [
			{
				id: 1,
				in_value: 80,
			},
			{
				id: 2,
				in_value: 85,
			},
			{
				id: 3,
				in_value: 90,
			},
			{
				id: 4,
				in_value: 95,
			},
		];

		this.setState({
			actions: JSON.parse(JSON.stringify(initial_actions)),
			saved_actions: JSON.parse(JSON.stringify(initial_actions)),
		});
		console.log(this.state.initial_actions);
	}
	updateActionData = (ActionID, name, actionData) => {
		var array = [ ...this.state.actions ];
		array = array.map((data) => {
			if (data.id == ActionID) {
				data[name] = actionData[name];
			}
			return data;
		});
		this.setState({ actions: array });
	};
	renderHeaderButtons = () => {
		const { edit, actions, saved_actions } = this.state;
		if (edit) {
			return (
				<React.Fragment>
					<button
						className="btn btn-transparent py-0 pl-0 pr-3 text-white weight-600 font-Lsmall mx-1"
						onClick={() => {
							this.setState({ edit: false, saved_actions: JSON.parse(JSON.stringify(actions)) });
						}}
					>
						<SaveIcon /> Save
					</button>
					<button
						className="btn btn-transparent py-0 pl-0 pr-3 text-white weight-600 font-Lsmall mx-1"
						onClick={() => {
							this.setState({ edit: false, actions: JSON.parse(JSON.stringify(saved_actions)) });
						}}
					>
						<CancelIcon /> Cancel
					</button>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<button
						className="btn btn-transparent py-0 pl-0 pr-3 text-white weight-600 font-Lsmall"
						onClick={() => {
							this.setState({ edit: true });
						}}
					>
						<EditIcon /> Edit
					</button>
				</React.Fragment>
			);
		}
	};
	renderActionCells = () => {
		return (
			<React.Fragment>
				{this.state.actions.map((value, key) => (
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
							<div className="card_heading_left_side">
								<CardiacIcon />
								<h3> Cardiac - Heart Rate</h3>
							</div>
							<span>{this.renderHeaderButtons()}</span>
						</div>

						<div className="card_fields">
							<Row>
								<Col md={3} className="cardiac-left-side">
									<div>
										<h4>a. Measured every 2 hours</h4>
									</div>
								</Col>
								<Col md={9} className="cardiac-right-side">
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
									<CardiacChart chart_data={this.state.saved_actions} />
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CardiacTableChart;
