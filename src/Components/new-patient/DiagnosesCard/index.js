import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { CardiacIcon, HemoDynamicIcon, BloodDropIcon } from './../../shared/Icons';
import './styles.scss';
export class DiagnosesCard extends Component {
	render() {
		return (
			<div className="tab_card">
				<h3 className="card_heading">Diagnosis</h3>
				<div className="card_fields">
					<Row>
						<Col xl={4} lg={4} md={4} sm={4} xs={4}>
							<div className="field_item">
								<div className="item_Header">
									<h4>Cardiac</h4>
								</div>

								<div className="item_body">
									<p>
										<span>AT12: </span> Coronary Artery Disease.
									</p>
									<p>
										<span>AT12: </span> Coronary Artery Disease.
									</p>
								</div>
							</div>
						</Col>
						<Col xl={4} lg={4} md={4} sm={4} xs={4}>
							<div className="field_item">
								<div className="item_Header">
									<HemoDynamicIcon /> <h4>Hemodynamic</h4>
								</div>

								<div className="item_body">
									<p>
										<span>AT12: </span> Coronary Artery Disease.
									</p>
									<p>
										<span>AT12: </span> Coronary Artery Disease.
									</p>
								</div>
							</div>
						</Col>
						<Col xl={4} lg={4} md={4} sm={4} xs={4}>
							<div className="field_item">
								<div className="item_Header">
									<BloodDropIcon />
									<h4>Blood Glucose</h4>
								</div>

								<div className="item_body">
									<p>
										<span>AT12: </span> Coronary Artery Disease.
									</p>
									<p>
										<span>AT12: </span> Coronary Artery Disease.
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
export default DiagnosesCard;
