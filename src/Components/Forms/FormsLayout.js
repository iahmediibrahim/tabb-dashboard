import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './../../logo.svg';
import './Forms.css';

export const FormsLayout = ({ heading, children }) => (
	<div className="formWrapper">
		<Container>
			<Row>
				<Col xl={6} lg={6} md={6} sm={12} xs={12}>
					<div className="tabb-logo">
						<img src={logo} className="" alt="tabb-logo" />
					</div>
					<div className="tabb-info">
						<h1>Welcome to Tabb System</h1>
						<p>
							Your Remote Patient Monitoring system that will help you track your patient’s condition
							easily.
						</p>
					</div>
				</Col>
				<Col xl={6} lg={6} md={6} sm={12} xs={12}>
					<div className="innerForm">
						<h2 className="form-title">{heading}</h2>
						{children}
					</div>
				</Col>
			</Row>
		</Container>
	</div>
);
export default FormsLayout;
