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
				nin: ' #65646546',
				nhid: ' #65646546',
				allergies: 'gucci perfumes” - “channel perfumes',
				medication: ' Dopamine 500 mg - Captopril 75 mg - Glimipride 75 mg',
				Mobile: '+9665049980',
				Location: ' Al Sahafah,Riyadh 13321, Saudi Arabia',
				CaregiverName: 'Ahmed Ali',
				CaregiverMobile: '+9665049981',
				recentVisits: [
					{
						hospitalName: 'King Fahd Hospital-1',
						visitDate: '22 Oct 2020',
						reason: 'Heavy chest pain',
						describedMeds: 'Glimipride',
						Physician: 'Dr. Salem Salah',
						moreDetails: 'Lorem'
					},
					{
						hospitalName: 'King Fahd Hospital-2',
						visitDate: '23 Oct 2020',
						reason: 'Heavy chest pain',
						describedMeds: 'Glimipride',
						Physician: 'Dr. Salem Salah',
						moreDetails: 'Lorem'
					},
					{
						hospitalName: 'King Fahd Hospital-3',
						visitDate: '24 Oct 2020',
						reason: 'Heavy chest pain',
						describedMeds: 'Glimipride',
						Physician: 'Dr. Salem Salah',
						moreDetails: 'Lorem'
					},
					{
						hospitalName: 'King Fahd Hospital-4',
						visitDate: '25 Oct 2020',
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
					{this.state.PatientDetails.map((PatientInfo) => {
						return (
							<div
								className={this.state.translateX === '0' ? 'patient-profile' : 'patient-profile closed'}
							>
								<Button className="collapseMenu" type="primary" onClick={this.showHide}>
									<Icon type={this.state.collapsed ? 'right' : 'left'} />
								</Button>
								<div className="profile-header">
									<div class="media">
										<img
											src={patientProfile}
											alt="patient profile img"
											class="mr-3 rounded-circle"
										/>
										<div class="media-body">
											<h4>{PatientInfo.name}</h4>
											<p>{PatientInfo.age}</p>
										</div>
									</div>
									<div className="patient-db">
										<div className="db-item">
											<h5>
												MRN: <span>{PatientInfo.mrn} </span>
											</h5>
										</div>
										<div className="db-item">
											<h5>
												NIN: <span> {PatientInfo.nin}</span>
											</h5>
										</div>
										<div className="db-item">
											<h5>
												NHID: <span>{PatientInfo.nhid} </span>
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
											<span> {PatientInfo.allergies} </span>
										</h5>
										<h5>
											Medications:
											<span> {PatientInfo.medication}</span>
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
											{PatientInfo.recentVisits.map((recentvisit, index) => {
												return (
													<TabPane
														className="tab-opened-content"
														tab={
															<div
																className="tab-title"
																onClick={() =>
																	this.setState({
																		translateX: '0',
																		collapsed: false
																	})}
															>
																<h5>
																	<HospitalVisitsIcon />
																	{recentvisit.hospitalName}
																</h5>
																<p> {recentvisit.visitDate} </p>
															</div>
														}
														key={index}
													>
														<div className="tab-opened-body">
															<div className="tab-opened-header">
																<span>
																	<HospitalVisitsIcon />
																</span>
																<h4>
																	{recentvisit.hospitalName} - {recentvisit.visitDate}
																</h4>
															</div>
															<div className="tab-opened-content">
																<h6>
																	Reason: <span>{recentvisit.reason}</span>
																</h6>

																<h6>
																	Described meds:
																	<span>{recentvisit.describedMeds}</span>
																</h6>

																<h6>
																	Physician: <span>{recentvisit.Physician}</span>
																</h6>
																<h6>
																	More Details:
																	<span>{recentvisit.moreDetails}</span>
																</h6>
															</div>
														</div>
													</TabPane>
												);
											})}
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
											<span> {PatientInfo.Mobile}</span>
										</h5>

										<h5>
											Location:
											<span>
												<a>{PatientInfo.Location}</a>
											</span>
										</h5>
										<h5>
											Caregiver Name:
											<span> {PatientInfo.CaregiverName}</span>
										</h5>
										<h5>
											Caregiver Mobile
											<span>: {PatientInfo.CaregiverMobile}</span>
										</h5>
									</div>
								</div>
							</div>
						);
					})}
				</Drawer>
			</div>
		);
	}
}

export default Form.create()(Profile);
