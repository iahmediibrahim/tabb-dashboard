import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';
import {
	AssignIcon,
	ReferIcon,
	CardiacIcon,
	BloodDropIcon,
	HeartAlertIcon,
	BloodGlucoseIcon,
	HemoDynamicIcon,
	MotionIcon,
	HeartDynamicIcon,
	WeightIcon,
	TempIcon,
	AlertIcon,
} from './../shared/Icons';

import './styles.scss';
export default class TableLayout extends Component {
	state = {
		loading: true,
		data: [],
		searchText: '',
		searchedColumn: '',
	};
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.data.length > 0) {
			return {
				loading: nextProps.loading,
				data: nextProps.data,
			};
		}
		return null;
	}

	getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 12 }}>
				<Input
					ref={(node) => {
						this.searchInput = node;
					}}
					placeholder={`${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [ e.target.value ] : [])}
					onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 12, display: 'block' }}
				/>
				<Button
					type="primary"
					onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
					size="small"
					style={{ width: 90, marginRight: 8 }}
				>
					Search
				</Button>
				<Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
					Reset
				</Button>
			</div>
		),
		filterIcon: (filtered) => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
		onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => this.searchInput.select());
			}
		},
		render: (text) =>
			this.state.searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
					searchWords={[ this.state.searchText ]}
					autoEscape
					textToHighlight={text.toString()}
				/>
			) : (
				text
			),
	});

	handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		this.setState({
			searchText: selectedKeys[0],
			searchedColumn: dataIndex,
		});
	};

	handleReset = (clearFilters) => {
		clearFilters();
		this.setState({ searchText: '' });
	};
	// rowSelection object indicates the need for row selection
	rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			this.props.getPatient(selectedRows);
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name,
		}),
	};
	filterGender(text) {
		const item = text.toString().toUpperCase();
		return !item.localeCompare('MALE') ? (
			<span style={{ color: '#2781FF' }}>{item}</span>
		) : (
			<span style={{ color: '#CBA2FF' }}>{item}</span>
		);
	}

	displayArrayItems(text) {
		const items = new Array(text);
		console.log(typeof items, items);
		let entry = items[0].map((i) => {
			const iconName = i.toLowerCase();
			return <img key={iconName} src={`./img/icons/${iconName}.svg`} alt={iconName} />;
		});
		console.log(entry);
		return <span>{entry}</span>;
	}
	displayAlertsType(text) {
		console.log(typeof text, text);
		if (text === 'heart-rate') {
			return (
				<div className="alertType">
					<span>
						<CardiacIcon />
					</span>
					<p>Heart Rate</p>
				</div>
			);
		} else if (text === 'SpO2') {
			return (
				<div className="alertType">
					<span>
						<CardiacIcon />
					</span>
					<p>{text}</p>
				</div>
			);
		} else if (text === 'Bl.Pressure') {
			return (
				<div className="alertType">
					<span>
						<HemoDynamicIcon />
					</span>
					<p> {text}</p>
				</div>
			);
		} else if (text === 'BG(b.meal)') {
			return (
				<div className="alertType">
					<span>
						<BloodGlucoseIcon />
					</span>
					<p>{text}</p>
				</div>
			);
		} else if (text === 'motion') {
			return (
				<div className="alertType">
					<span>
						<MotionIcon />
					</span>
					<p>{text}</p>
				</div>
			);
		}
		return { ...this.props.text };
	}

	returnStatus(value) {
		let status;

		if (value.criticalLow) {
			status = <span className="criticalLow" />;
		}
		if (value.low) {
			status = <span className="low" />;
		}
		if (value.normal) {
			status = <span className="normal" />;
		}
		if (value.high) {
			status = <span className="high" />;
		}
		if (value.criticalHigh) {
			status = <span className="criticalHigh" />;
		}
		return status;
	}
	generateIcon(items, item) {
		return items[0].map((i, index) => {
			let icon;
			if (i.type === item) {
				icon = this.returnStatus(i);
			}
			if (icon !== undefined) {
				return icon;
			} else {
				return;
			}
		});
	}
	displayMeasurements(text) {
		const items = new Array(text);
		return (
			<span className="measurements-icons">
				<span className="heartRate">
					{this.generateIcon(items, 'bpm')} {this.generateIcon(items, 'spo2')} <CardiacIcon />
				</span>
				<span className="bloodG">
					{this.generateIcon(items, 'bgb')} {this.generateIcon(items, 'bga')} <BloodDropIcon />
				</span>
				<span className="bp">
					{this.generateIcon(items, 'bp')} <HeartDynamicIcon />
				</span>
				<span className="temp">
					{this.generateIcon(items, 'temp')} <TempIcon />
				</span>
				<span className="weight">
					{this.generateIcon(items, 'weight')} <WeightIcon />
				</span>
			</span>
		);
	}
	capitalize(s) {
		const text = s.split('-').join(' ');
		if (typeof text !== 'string') return '';
		return text.charAt(0).toUpperCase() + text.slice(1);
	}
	displayCriticality(text) {
		const item = text.toString().toLowerCase();
		if (item === 'critical-high') {
			return (
				<p className="criticalHighText mb-0">
					<AlertIcon />
					{this.capitalize(item)}
				</p>
			);
		}
		if (item === 'critical-low') {
			return (
				<p className="criticalLowText mb-0">
					<AlertIcon />
					{item.split('-')}
				</p>
			);
		}
		if (item === 'high') {
			return (
				<p className="highText mb-0">
					<AlertIcon />
					{item.split('-')}
				</p>
			);
		}
		if (item === 'normal') {
			return <p className="normalText mb-0">{item.split('-')}</p>;
		}
		if (item === 'low') {
			return (
				<p className="lowText mb-0">
					<AlertIcon />
					{item.split('-')}
				</p>
			);
		}
	}

	displayAlerts(text) {
		const items = new Array(text);
		return items[0].map((i, index) => {
			if (i.type === 'fail') {
				return (
					<p className="failAlert mb-0">
						<AlertIcon />
						Fail
					</p>
				);
			} else if (i.criticality === 'critical-high' || i.criticality === 'critical-low') {
				return (
					<p className="failAlert mb-0">
						<AlertIcon />
						{i.value}
					</p>
				);
			} else if (i.criticality === 'high' || i.criticality === 'low') {
				return (
					<p className="high_low_Alert mb-0">
						<AlertIcon />
						{i.value}
					</p>
				);
			}
		});
	}
	specificColumns() {
		return [
			this.props.mrn && {
				title: 'MRN',
				dataIndex: 'mrn',
				className: 'column-alert',
				sorter: (a, b) => a.mrn - b.mrn,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('mrn'),
			},
			this.props.firstName && {
				title: 'First Name',
				dataIndex: 'firstName',
				sorter: (a, b) => a.firstName.length - b.firstName.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('firstName'),
			},
			this.props.lastName && {
				title: 'Last Name',
				dataIndex: 'lastName',
				sorter: (a, b) => a.lastName.length - b.lastName.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('lastName'),
			},
			this.props.criticality && {
				title: 'Criticality',
				dataIndex: 'criticality',
				sorter: (a, b) => a.criticality.length - b.criticality.length,
				sortDirections: [ 'descend', 'ascend' ],
				filters: [
					{
						text: 'Critical High',
						value: 'critical-high',
					},
					{
						text: 'High',
						value: 'high',
					},
					{
						text: 'Critical Low',
						value: 'critical-low',
					},
					{
						text: 'Low',
						value: 'low',
					},
					{
						text: 'Normal',
						value: 'normal',
					},
				],
				onFilter: (value, record) => {
					console.log(value);
					return record.criticality.indexOf(value) === 0;
				},
				render: (text) => this.displayCriticality(text),
			},
			this.props.measurements && {
				title: 'Measurements',
				dataIndex: 'measurements',
				sorter: (a, b) => a.measurements.length - b.measurements.length,
				sortDirections: [ 'descend', 'ascend' ],
				render: (text) => this.displayMeasurements(text),
			},
			this.props.diagnosis && {
				title: 'Diagnosis',
				dataIndex: 'diagnosis',
				className: 'diagnosis_icon',
				sorter: (a, b) => a.diagnosis.length - b.diagnosis.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('diagnosis'),
				render: (text) => this.displayArrayItems(text),
			},

			this.props.gender && {
				title: 'Gender',
				dataIndex: 'gender',
				sortDirections: [ 'descend', 'ascend' ],
				filters: [
					{
						text: 'Female',
						value: 'FEMALE',
					},
					{
						text: 'Male',
						value: 'MALE',
					},
				],
				onFilter: (value, record) => record.gender.indexOf(value) === 0,
				render: (text) => this.filterGender(text),
			},
			this.props.age && {
				title: 'age',
				dataIndex: 'age',
				sorter: (a, b) => a.age - b.age,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('age'),
			},
			this.props.dateCreated && {
				title: 'Date of service',
				dataIndex: 'dateCreated',
				sorter: (a, b) => a.dateCreated.length - b.dateCreated.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('dateCreated'),
			},
			this.props.assignAction && {
				title: 'Assign',
				dataIndex: '',
				key: 'x',
				render: (item) => (
					// <Link to="/assignMeasurment">
					<button className="table-button" onClick={() => this.props.assignClick(item)}>
						<AssignIcon />
					</button>
					// </Link>
				),
			},
			this.props.referAction && {
				title: 'Refer',
				dataIndex: 'refrer',
				key: 'x',
				render: () => (
					<button className="table-button" onClick={this.props.referClick}>
						<ReferIcon />
					</button>
				),
			},

			this.props.abNormal && {
				title: 'Type',
				dataIndex: 'abNormal',
				sorter: (a, b) => a.abNormal.length - b.abNormal.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('abNormal'),
				render: (text) => this.displayAlertsType(text),
			},
			this.props.alert && {
				title: 'alert',
				dataIndex: 'alert',
				sorter: (a, b) => a.alert.length - b.alert.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('alert'),
				render: (text) => this.displayAlerts(text),
			},
			this.props.lastRead && {
				title: 'lastRead',
				dataIndex: 'lastRead',
				sorter: (a, b) => a.lastRead.length - b.lastRead.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('lastRead'),
			},

			this.props.status && {
				title: 'status',
				dataIndex: 'status',
				sorter: (a, b) => a.status.length - b.status.length,
				sortDirections: [ 'descend', 'ascend' ],
				...this.getColumnSearchProps('status'),
			},
		];
	}
	render() {
		return (
			<Table
				rowKey={(record) => record.id}
				columns={this.specificColumns().filter((p) => p !== false)}
				loading={this.state.loading}
				dataSource={this.state.data}
				rowSelection={this.props.selectable && this.rowSelection}
				size="middle"
				// onRow={
				// 	this.props.clickable &&
				// 	((record) => ({
				// 		onClick: () => {
				// 			this.props.rowClick(record);
				// 		},
				// 	}))
				// }
			/>
		);
	}
}
