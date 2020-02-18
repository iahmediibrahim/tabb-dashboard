import React from 'react';
import './styles.scss';
import { Table, Divider, Tag } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { CardiacIcon } from './../../shared/Icons';
import { Link } from 'react-router-dom';
const columns = [
	{
		title: 'Critical (below)',
		dataIndex: 'criticalBelow'
	},
	{
		title: 'Low (Below)',
		dataIndex: 'lowBelow'
	},

	{
		title: 'High (Above)',
		dataIndex: 'highAbove'
	},

	{
		title: 'Critical (Above)',
		dataIndex: 'criticalAbove'
	}
];

const chartValues = [
	{
		key: '1',
		criticalBelow: '100 bpm',
		lowBelow: '21/2/2021',
		highAbove: 'Critical High',
		criticalAbove: 'dd'
	}
];

class CardiacChart extends React.Component {
	state = {
		startFrom: 50,
		data: [
			{ value: 30, color: '#fa6557' },
			{ value: 35, color: '#ffb54c' },
			{ value: 40, color: '#35cc62' },
			{ value: 45, color: '#ffb54c' },
			{ value: 48, color: '#fa6557' }
		]
	};

	render() {
		var sum = 0;
		for (var i = 0; i < this.state.data.length; i++) {
			sum = sum + this.state.data[i].value;
		}
		var shapes = this.state.data.map((shape, i) => {
			var wid = shape.value / sum * 100;
			var radius = i == 0 ? 50 : 0;
			console.log(i);
			return (
				<div style={{ backgroundColor: shape.color, width: wid + '%' }} key={i}>
					<section>{shape.value + this.state.startFrom}</section>
				</div>
			);
		});
		return (
			<div className="cardiac-chart">
				<div className="tab_card">
					<h3 className="card_heading inside-tab">
						<span>
							<CardiacIcon /> Cardiac -
							<span> Heart Rate</span>
						</span>

						<span>
							<Link className="edit-action" to="/assignMeasurment">
								<CardiacIcon /> Take Action
							</Link>
						</span>
					</h3>
				</div>
				<div className="card_fields">
					<Row>
						<Col md={3}>
							<div className="cardiac-left-side">
								<h4>a. Measured every 2 hours</h4>
							</div>
						</Col>
						<Col md={9}>
							<div className="chart">
								<h4>b. The predefined readings:</h4>
								<Table columns={columns} dataSource={chartValues} bordered pagination={false} />
								<div className="contain">{shapes}</div>
								<div className="fixed">
									<span className="left">{this.state.startFrom}%</span>
									<span className="right">100%</span>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default CardiacChart;
