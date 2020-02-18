import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Checkbox from './../../ui-inputs/Checkbox';

import './styles.scss';
export class ChooseMeasurment extends Component {
	render() {
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
								<option>...</option>
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
									<Checkbox />
								</Col>
								<Col xl={4} lg={4} md={4} sm={4} xs={4}>
									<Checkbox />
								</Col>
								<Col xl={4} lg={4} md={4} sm={4} xs={4}>
									<Checkbox />
								</Col>
							</Row>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default ChooseMeasurment;
