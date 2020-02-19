import React, { Component } from 'react';
import { Modal } from 'antd';

import './styles.scss';

class ReferModal extends Component {
	render() {
		return (
			<div className="referModal">
				<Modal
					title="Basic Modal"
					visible={this.props.visible}
					onOk={this.props.handleCancel}
					onCancel={this.props.handleCancel}
				>
					<p>The System will Automaticaly refer this patient to Another Doctor</p>
				</Modal>
			</div>
		);
	}
}

export default ReferModal;
