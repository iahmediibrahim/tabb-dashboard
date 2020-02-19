import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from './Components/Forms/Login/Login';
import ForgetPassword from './Components/Forms/ForgetPassword/ForgetPassword';
import ResetPassword from './Components/Forms/ResetPassword/ResetPassword';
import Sidebar from './Components/Layout/Sidebar/Sidebar';
import TopHeader from './Components/Layout/TopHeader/TopHeader';
import Routes from './Components/Routes';

import './App.scss';

class App extends Component {
	state = {
		sidebarOpen: false,
	};
	getInitialState = () => {
		return { sidebarOpen: false };
	};
	handleViewSidebar = () => {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	};
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Redirect strict exact from="/" to="/login" />

					<Route exact path="/login" component={Login} />
					<Route exact path="/ForgetPassword" component={ForgetPassword} />
					<Route exact path="/ResetPassword" component={ResetPassword} />

					<div className={this.state.sidebarOpen ? 'admin closed' : 'admin opened'}>
						<nav className="admin__Sidebar">
							<Sidebar isopen={this.state.sidebarOpen} onClick={this.handleViewSidebar} />
						</nav>

						<header className="admin__TopHeader">
							<TopHeader />
						</header>

						<main className="admin__main">
							<Routes />
						</main>
					</div>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
