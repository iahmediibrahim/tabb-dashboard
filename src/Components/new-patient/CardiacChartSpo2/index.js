import React, { Component } from 'react';
import { Icon } from 'antd';
import CardiacChart from './Chart';
import ActionCell from './action';

class ChekboxsTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			actions: [],
			saved_actions: []
		};
	}
	componentDidMount() {
		const initial_actions = [
			{
				id: 1,
				in_value: 80
			},
			{
				id: 2,
				in_value: 85
			},
			{
				id: 3,
				in_value: 90
			},
			{
				id: 4,
				in_value: 95
			}
		];

		this.setState({
			actions: JSON.parse(JSON.stringify(initial_actions)),
			saved_actions: JSON.parse(JSON.stringify(initial_actions))
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
						className="btn btn-transparent text-white weight-600 font-Lsmall mx-1"
						onClick={() => {
							this.setState({ edit: false, saved_actions: JSON.parse(JSON.stringify(actions)) });
						}}
					>
						<Icon type="save" /> Save
					</button>
					<button
						className="btn btn-transparent text-white weight-600 font-Lsmall mx-1"
						onClick={() => {
							this.setState({ edit: false, actions: JSON.parse(JSON.stringify(saved_actions)) });
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
				<div className="checkbox-table-wrapper">
					{/* table header */}
					<div className="table-header bg-primary py-md-1 px-md-5 px-4">
						<div className="d-flex justify-content-between align-items-center">
							<span className="text-white font-Lsmall weight-600">Actions</span>
							<div className="btns-wrapper">
								<div className="d-flex">{this.renderHeaderButtons()}</div>
							</div>
						</div>
					</div>

					{/* table */}
					<table className="table">
						<thead>
							<tr>
								<th />
								<th scope="col" className="weight-500 font-Lsmall text-center">
									C.Low
								</th>
								<th scope="col" className="weight-500 font-Lsmall text-center">
									Low
								</th>
								<th scope="col" className="weight-500 font-Lsmall text-center">
									High
								</th>
								<th scope="col" className="weight-500 font-Lsmall text-center">
									C.High
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row" className="weight-500 font-Lsmall text-center">
									Notify Patient
								</th>
								{this.renderActionCells()}
							</tr>
						</tbody>

						<CardiacChart chart_data={this.state.saved_actions} />
					</table>
				</div>
			</React.Fragment>
		);
	}
}

export default ChekboxsTable;
