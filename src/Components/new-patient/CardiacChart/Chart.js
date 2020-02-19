import React from 'react';
import './styles.scss';
import { Table } from 'antd';
import { Row, Col } from 'antd';

class CardiacChart extends React.Component {
	state = {
		startFrom: 0,
		data: [
			{ color: '#fa6557' },
			{ color: '#ffb54c' },
			{ color: '#35cc62' },
			{ color: '#ffb54c' },
			{ color: '#fa6557', value: 98 }
		]
	};

	render() {
		const { chart_data } = this.props;
		var sum = 0;
		for (var j = 0; j < chart_data.length; j++) {
			this.state.data[j].value = chart_data[j].in_value;
		}

		for (var m = 0; m < this.state.data.length; m++) {
			sum = sum + this.state.data[m].value;
		}
		var shapes = this.state.data.map((shape, i) => {
			var wid = shape.value / sum * 100;
			var radius = i == 0 ? 50 : 0;
			console.log(i);
			return (
				<div style={{ backgroundColor: this.state.data[i].color, width: wid + '%' }} key={i}>
					<section>{shape.value + this.state.startFrom}</section>
				</div>
			);
		});
		return (
			<div className="cardiac-chart">
				<div className="card_fields">
					<div className="chart">
						<div className="contain">{shapes}</div>
						<div className="fixed">
							<span className="left">50%</span>
							<span className="right">100%</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardiacChart;
