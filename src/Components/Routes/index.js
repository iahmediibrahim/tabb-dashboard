import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewPatient from './../new-patient';
import Monitored from './../Monitored';
import AssignMeasurment from './../new-patient/AssignMeasurment';
import ALerts from './../ALerts';
import PatientProfile from './../Profile';

const createRoutes = () => (
	<Switch>
		<Route path="/new-patient" component={NewPatient} />

		<Route exact path="/monitoredPatients" component={Monitored} />
		<Route path="/monitoredPatients/:userName" component={PatientProfile} />

		<Route path="/ALerts" component={ALerts} />
		<Route path="/assignMeasurment" component={AssignMeasurment} />
	</Switch>
);

export default createRoutes;
