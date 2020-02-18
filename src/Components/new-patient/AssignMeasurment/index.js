import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import DiagnosesCard from './../DiagnosesCard';
import ChooseMeasurment from './../ChooseMeasurment';
import CardiacChart from './../CardiacChart';
import ChekboxsTable from './../CardiacChartSpo2/index';
import Checkbox from './../../ui-inputs/Checkbox';
import Profile from '../../Profile/SideModal';
import './styles.scss';

export class AssignMeasurment extends Component {
	state = {
		checked: false
	};
	handleCheckClick = () => {
		this.setState({ checked: !this.state.checked });
	};
	render() {
		return (
			<Container fluid={true}>
				<Row>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						<DiagnosesCard />
						<ChooseMeasurment />
						<ChekboxsTable />

						{/* review-reading" */}
						<div className="review-reading">
							<CardiacChart />
						</div>
						{/* end-reading" */}
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
