import React, { Component } from 'react';
import Table from './../shared/Table';
import PatientDetailsModal from './../new-patient/PatientDetailsModal';
import dataService from './../services/data.service';
const HANDLE = 'patients';

//static data (no api)
// PATIENT’S ADDRES:AL SAHAFAH,RIYADH 13321, SAUDI ARABIA
// Diagnosis :
//  Hemodynamic
// AS85: Congestive Heart Failure.
// AS85: Congestive Heart Failure.
//  Cardiac
// AS85: Congestive Heart Failure.
// AS85: Congestive Heart Failure.
// Assign

const patientData = [
	{
		key: '1',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'Maha',
		lastName: 'ahmed',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'temp' ],
		gender: 'female',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01185749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '2',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'alaa',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'weight' ],
		gender: 'female',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01585749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '3',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'soad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'weight' ],
		gender: 'female',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01085749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '4',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'weight' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '5',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'Temp' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01115749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},

	{
		key: '6',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'Temp', 'glucose', 'weight' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},

	{
		key: '7',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'Temp' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},

	{
		key: '8',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'glucose', 'weight' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},

	{
		key: '9',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'weight' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '10',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'weight' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '10',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'Temp' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '10',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'cardiac', 'hemoDynamic', 'Temp' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	},
	{
		key: '10',
		mrn: '#123456',
		min: '#678910',
		nhid: '#852147',
		firstName: 'amgad',
		lastName: 'Mohamad',
		diagnosis: [ 'hemoDynamic', 'Temp', 'weight' ],
		gender: 'male',
		age: '23',
		dataCreated: '21/10/2014',
		mobile: '01005749638',
		CaregiverName: 'AHMED ALI',
		CaregiverPhone: '+966504769721',
		PatientAddress: 'Al Sahafah,Riyadh 13321, Saudi Arabia'
	}
];

export default class NewPatient extends Component {
	state = {
		//(hashed till using Api) data: [],
		visible: false,
		item: {}
	};
	componentDidMount() {
		this.getData();
	}
	getData = () => {
		dataService.get(HANDLE).then((items) => {
			const monitoredPatients = items.filter((item) => item.assigned === true);
			console.log(monitoredPatients);

			this.setState({
				viewPatient: false,
				data: monitoredPatients
			});
		});
	};
	getPatient = (item) => {
		console.log(item);
	};
	rowClick = (item) => {
		this.setState({
			visible: true,
			item
		});
		console.log('rowclick', item);
	};
	assignClick = (item) => {
		// this.setState({
		// 	visible: true,
		// 	item
		// });
		// console.log('rowclick', item);
	};
	handleCancel = () => {
		console.log('handlecancel');
		this.setState({
			visible: false
		});
	};
	render() {
		const columns = {
			mrn: true,
			firstName: true,
			lastName: true,
			diagnosis: true,
			gender: true,
			age: true,
			dateCreated: true,
			assignAction: true,
			referAction: true,
			selectable: false,
			clickable: true,
			abNormal: false,
			alert: false,
			lastRead: false,
			status: false,
			criticality: false,
			measurements: false
		};
		return (
			<div className="Alerts">
				<PatientDetailsModal
					handleCancel={this.handleCancel}
					visible={this.state.visible}
					item={this.state.item}
				/>
				<Table
					assignClick={this.assignClick}
					{...columns}
					rowClick={this.rowClick}
					getPatient={this.getPatient}
					loading={this.state.loading}
					data={JSON.parse(JSON.stringify(patientData))}
				/>
			</div>
		);
	}
}
