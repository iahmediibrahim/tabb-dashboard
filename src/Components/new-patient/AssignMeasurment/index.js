import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import DiagnosesCard from './../DiagnosesCard';
import ChooseMeasurment from './../ChooseMeasurment';
import CardiacTableChart from './../CardiacChart';
import Profile from '../../Profile/SideModal';
import './styles.scss';
import EditableCheckboxTable from '../../shared/EditableCheckboxTable';

export class AssignMeasurment extends Component {
	state = {
		checked: false,
		editCheckboxTable: false
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
					</Col>
					<Col xl={10} lg={10} md={10} sm={12} xs={12}>
						<div className="recentAlerts">
							<EditableCheckboxTable />
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
