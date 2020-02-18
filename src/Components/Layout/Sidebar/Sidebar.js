import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import logo from './../../../logo.svg';
import { MenuIcon, DashboardIcon, PatientIcon, MonitoredPatientIcon, AlertIcon } from './../../shared/Icons';

class SideNav extends Component {
	render() {
		return (
			<div className="side-bar">
				<div className="side-menu-header">
					<div className="menu-icon" onClick={this.props.onClick}>
						<MenuIcon alt="Menu Icon" />
					</div>
					<div className="header-logo">
						<img src={logo} />
					</div>
				</div>

				<ul className="ul-list">
					<li className="list-item">
						<NavLink to="/Dashboard">
							<DashboardIcon />
							<span>Dashoboard</span>
						</NavLink>
					</li>

					<li className="list-item">
						<NavLink to="/new-patient" activeclassname="active">
							<PatientIcon />
							<span>New Patient</span>
						</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/monitoredPatients" activeclassname="active">
							<MonitoredPatientIcon />

							<span>Monitored Patients</span>
						</NavLink>
					</li>
					<li className="list-item">
						<NavLink to="/Alerts" activeclassname="active">
							<AlertIcon />
							<span>Alerts</span>
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
export default SideNav;