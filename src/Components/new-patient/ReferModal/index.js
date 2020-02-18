import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col, Modal } from 'react-bootstrap';
import './styles.scss';

class ReferModal extends Component {
	state = {
		show: false,
	};

	showModal = () => {
		this.setState({
			show: true,
		});
	};
	hideModal = () => {
		this.setState({
			show: false,
		});
	};

	render() {
		return (
			<div className="referModal">
				<Modal
					show={this.props.show}
					onHide={this.hideModal}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="ModalHeader">Refer Patient</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h3>The System Will Automaticaly Refer This Patient To Another Doctor</h3>
					</Modal.Body>
					<Modal.Footer>
						<button className="btn btn-primary">Refer</button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default ReferModal;
