import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, NavDropdown } from 'react-bootstrap';
import profileImg from './../../../assets/img/layout/profileImg.png';
import './TopHeader.css';

class TopHeader extends Component {
	render() {
		const path = this.props.location.pathname.slice(1);
		return (
			<Container fluid={true}>
				<div className="top_Header">
					<h3 className="main_title">{path}</h3>
					<div className="login_profile">
						<div className="user-details">
							<img src={profileImg} />
							<span>Dr. Osama</span>
						</div>
						<NavDropdown title="" id="nav-dropdown">
							<NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
							<NavDropdown.Item eventKey="4.2">Log out</NavDropdown.Item>
						</NavDropdown>
					</div>
				</div>
			</Container>
		);
	}
}

export default withRouter(TopHeader);
