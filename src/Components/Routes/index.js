import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewPatient from './../new-patient';
import Monitored from './../Monitored';
import AssignMeasurment from './../new-patient/AssignMeasurment';
import ALerts from './../ALerts';
import PatientProfile from './../Profile';
import Patients from './../Patients';
import Devices from './../Devices';
import AssignDevice from './../AssignDevices';

const createRoutes = () => (
	<Switch>
		<Route path="/new-patient" component={NewPatient} />
		<Route exact path="/monitoredPatients" component={Monitored} />
		<Route exact path="/monitoredPatients/:userName" component={PatientProfile} />
		<Route exact path="/patients/:userName" component={PatientProfile} />
		<Route exact path="/patients/:userName/AssignDevice" component={AssignDevice} />
		<Route path="/ALerts" component={ALerts} />
		<Route path="/assignMeasurment" component={AssignMeasurment} />
		<Route path="/patients" component={Patients} />
		<Route path="/devices" component={Devices} />
	</Switch>
);

export default createRoutes;
