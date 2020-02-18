import React, { Component } from 'react';
import { Drawer, Button, Form, Tabs, Icon } from 'antd';
import { Row, Col } from 'react-bootstrap';
import 'antd/dist/antd.css';
import './styles.scss';
import patientProfile from './../../../assets/img/icons/patientProfile.png';
import {
	PatientIcon,
	AllergiesMedicationIcon,
	RecentVisitsIcon,
	ContactIcon,
	HospitalVisitsIcon
} from './../../shared/Icons';

const { TabPane } = Tabs;

class Profile extends Component {
	state = {
		visible: true,
		translateX: 800,
		collapsed: false,
		PatientDetails: [
			{
				name: 'Jameel Al Shiri',
				age: '64 Years',
				mrn: ' #65646546',
				min: ' #65646546',
				nhid: ' #65646546',
				allergies: 'gucci perfumes” - “channel perfumes',
				medication: ' Dopamine 500 mg - Captopril 75 mg - Glimipride 75 mg',
				recentVisits: [
					{
						hospitalName: 'King Fahd Hospital',
						visitDate: '22 Oct 2020',
						reason: 'Heavy chest pain',
						describedMeds: 'Glimipride',
						Physician: 'Dr. Salem Salah',
						moreDetails: 'Lorem'
					}
				]
			}
		]
	};

	showHide = () => {
		this.setState((prevState) => ({
			translateX: prevState.translateX === '0' ? '800' : '0',
			collapsed: !this.state.collapsed
		}));
	};

	render() {
		return (
			<div>
				<Drawer
					// style={{ transform: `translateX(${this.state.translateX}px)` }}
					className={this.state.translateX === '0' ? 'close-content' : 'open-content'}
					placement="right"
					closable={false}
					onClose={this.showHide}
					visible={this.state.visible}
				>
					{this.state.PatientDetails.map((i) => console.log(i.name))}
					<div className={this.state.translateX === '0' ? 'patient-profile' : 'patient-profile closed'}>
						<Button className="collapseMenu" type="primary" onClick={this.showHide}>
							<Icon type={this.state.collapsed ? 'right' : 'left'} />
						</Button>
						<div className="profile-header">
							<div class="media">
								<img src={patientProfile} alt="patient profile img" class="mr-3 rounded-circle" />
								<div class="media-body">
									<h4>gsvcgdsbg</h4>
									<p>64 Years</p>
								</div>
							</div>
							<div className="patient-db">
								<div className="db-item">
									<h5>
										MRN: <span>#65646546</span>
									</h5>
								</div>
								<div className="db-item">
									<h5>
										NIN: <span>#65646546</span>
									</h5>
								</div>
								<div className="db-item">
									<h5>
										NHID: <span>#65646546</span>
									</h5>
								</div>
							</div>
						</div>
						<div className="AllergiesMedicationIcon">
							<div className="profile-generalTitle">
								<span>
									<AllergiesMedicationIcon />
								</span>
								<h4>Allergies & Medication</h4>
							</div>

							<div className="details">
								<h5>
									Allergies:
									<span> "gucci perfumes” - “channel perfumes"</span>
								</h5>
								<h5>
									Medications:
									<span> Dopamine 500 mg - Captopril 75 mg - Glimipride 75 mg</span>
								</h5>
							</div>
						</div>
						<div className="recentVisitsrecentVisits">
							<div className="profile-generalTitle">
								<span>
									<RecentVisitsIcon />
								</span>
								<h4>Recent Visits</h4>
							</div>
							<div className="recentVisits-Tabs">
								<Tabs defaultActiveKey="2">
									<TabPane
										className="tab-opened-content"
										tab={
											<div
												className="tab-title"
												onClick={() =>
													this.setState({
														translateX: '0',
														collapsed: false,
													})}
											>
												<h5>
													<HospitalVisitsIcon />
													King Fahd Hospital
												</h5>
												<p> 22 Oct 2020</p>
											</div>
										}
										key="1"
									>
										<div className="tab-opened-body">
											<div className="tab-opened-header">
												<span>
													<HospitalVisitsIcon />
												</span>
												<h4>King Fahd Hospital - 22 Oct 2020</h4>
											</div>
											<div className="tab-opened-content">
												<h6>
													Reason: <span>Heavy chest pain</span>
												</h6>

												<h6>
													Described meds: <span>Glimipride</span>
												</h6>

												<h6>
													Physician: <span>Dr. Salem Salah</span>
												</h6>
												<h6>
													More Details:
													<span>
														More Details: Lorem Ipsum is simply dummy text of the printing
														and typesetting industry. Lorem Ipsum has been the industry’s
														standard dummy text ever since the 1500s, when an unknown
													</span>
												</h6>
											</div>
										</div>
									</TabPane>

									<TabPane
										className="tab-opened-content"
										tab={
											<div
												className="tab-title"
												onClick={() =>
													this.setState({
														translateX: '0',
														collapsed: false,
													})}
											>
												<h5>
													<HospitalVisitsIcon />
													King Fahd Hospital
												</h5>
												<p> 22 Oct 2020</p>
											</div>
										}
										key="2"
									>
										<div className="tab-opened-body">
											<div className="tab-opened-header">
												<span>
													<HospitalVisitsIcon />
												</span>
												<h4>King Fahd Hospital - 22 Oct 2020</h4>
											</div>
											<div className="tab-opened-content">
												<h6>
													Reason: <span>Heavy chest pain</span>
												</h6>

												<h6>
													Described meds: <span>Glimipride</span>
												</h6>

												<h6>
													Physician: <span>Dr. Salem Salah</span>
												</h6>
												<h6>
													More Details:
													<span>
														More Details: Lorem Ipsum is simply dummy text of the printing
														and typesetting industry. Lorem Ipsum has been the industry’s
														standard dummy text ever since the 1500s, when an unknown
													</span>
												</h6>
											</div>
										</div>
									</TabPane>

									<TabPane
										className="tab-opened-content"
										tab={
											<div
												className="tab-title"
												onClick={() =>
													this.setState({
														translateX: '0',
														collapsed: false,
													})}
											>
												<h5>
													<HospitalVisitsIcon />
													King Fahd Hospital
												</h5>
												<p> 22 Oct 2020</p>
											</div>
										}
										key="3"
									>
										<div className="tab-opened-body">
											<div className="tab-opened-header">
												<span>
													<HospitalVisitsIcon />
												</span>
												<h4>King Fahd Hospital - 22 Oct 2020</h4>
											</div>
											<div className="tab-opened-content">
												<h6>
													Reason: <span>Heavy chest pain</span>
												</h6>

												<h6>
													Described meds: <span>Glimipride</span>
												</h6>

												<h6>
													Physician: <span>Dr. Salem Salah</span>
												</h6>
												<h6>
													More Details:
													<span>
														More Details: Lorem Ipsum is simply dummy text of the printing
														and typesetting industry. Lorem Ipsum has been the industry’s
														standard dummy text ever since the 1500s, when an unknown
													</span>
												</h6>
											</div>
										</div>
									</TabPane>

									<TabPane
										className="tab-opened-content"
										tab={
											<div
												className="tab-title"
												onClick={() =>
													this.setState({
														translateX: '0',
														collapsed: false,
													})}
											>
												<h5>
													<HospitalVisitsIcon />
													King Fahd Hospital
												</h5>
												<p> 22 Oct 2020</p>
											</div>
										}
										key="4"
									>
										<div className="tab-opened-body">
											<div className="tab-opened-header">
												<span>
													<HospitalVisitsIcon />
												</span>
												<h4>King Fahd Hospital - 22 Oct 2020</h4>
											</div>
											<div className="tab-opened-content">
												<h6>
													Reason: <span>Heavy chest pain</span>
												</h6>

												<h6>
													Described meds: <span>Glimipride</span>
												</h6>

												<h6>
													Physician: <span>Dr. Salem Salah</span>
												</h6>
												<h6>
													More Details:
													<span>
														More Details: Lorem Ipsum is simply dummy text of the printing
														and typesetting industry. Lorem Ipsum has been the industry’s
														standard dummy text ever since the 1500s, when an unknown
													</span>
												</h6>
											</div>
										</div>
									</TabPane>

									<TabPane
										className="tab-opened-content"
										tab={
											<div
												className="tab-title"
												onClick={() =>
													this.setState({
														translateX: '0',
														collapsed: false,
													})}
											>
												<h5>
													<HospitalVisitsIcon />
													King Fahd Hospital
												</h5>
												<p> 22 Oct 2020</p>
											</div>
										}
										key="5"
									>
										<div className="tab-opened-body">
											<div className="tab-opened-header">
												<span>
													<HospitalVisitsIcon />
												</span>
												<h4>King Fahd Hospital - 22 Oct 2020</h4>
											</div>
											<div className="tab-opened-content">
												<h6>
													Reason: <span>Heavy chest pain</span>
												</h6>

												<h6>
													Described meds: <span>Glimipride</span>
												</h6>

												<h6>
													Physician: <span>Dr. Salem Salah</span>
												</h6>
												<h6>
													More Details:
													<span>
														More Details: Lorem Ipsum is simply dummy text of the printing
														and typesetting industry. Lorem Ipsum has been the industry’s
														standard dummy text ever since the 1500s, when an unknown
													</span>
												</h6>
											</div>
										</div>
									</TabPane>
								</Tabs>
							</div>
						</div>
						<div className="patient-contacts">
							<div className="profile-generalTitle">
								<span>
									<ContactIcon />
								</span>
								<h4>Contact</h4>
							</div>
							<div className="contact-container ">
								<h5>
									Mobile :
									<span> +9665049980</span>
								</h5>

								<h5>
									Location:
									<span>
										<a> Al Sahafah,Riyadh 13321, Saudi Arabia</a>{' '}
									</span>
								</h5>
								<h5>
									Caregiver Name:
									<span> Ahmed Ali</span>
								</h5>
								<h5>
									Caregiver Mobile
									<span>: +9665049981</span>
								</h5>
							</div>
						</div>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default Form.create()(Profile);
