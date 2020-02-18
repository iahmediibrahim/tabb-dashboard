import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import pagination from './pagination';
import { Container, Row, Col } from 'react-bootstrap';
import './Tabel.scss';
import Assign_icon from './../../assets/img/icons/Assign_icon.svg';
import Refer_icon from './../../assets/img/icons/Refer_icon.svg';
import dataService from './../services/data.service';
import ModalPatient from './ModalPatient';
import { Button, ButtonToolbar } from 'react-bootstrap';
export class Table extends Component {
	state = {
		data: [],
		addModalShow: false
	};
	componentDidMount() {
		dataService.get(this.props.handle).then((items) => this.setState({ data: items }));
	}
	render() {
		let addModalClose = () => this.setState({ addModalShow: false });

		const columns = [
			{
				Header: () => {
					return (
						<span>
							MRN
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'mrn',
				Filter: ({ filter, onChange }) => (
					<input
						onChange={(event) => onChange(event.target.value)}
						placeholder="MRN"
						value={filter ? filter.value : ''}
						style={{}}
					/>
				)
			},
			{
				Header: () => {
					return (
						<span>
							First Name
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'firstName',
				Filter: ({ filter, onChange }) => (
					<input
						onChange={(event) => onChange(event.target.value)}
						placeholder="First Name"
						value={filter ? filter.value : ''}
						style={{}}
					/>
				)
			},
			{
				Header: () => {
					return (
						<span>
							Last Name
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'lastName',
				Filter: ({ filter, onChange }) => (
					<input
						onChange={(event) => onChange(event.target.value)}
						placeholder="Last Name"
						value={filter ? filter.value : ''}
						style={{}}
					/>
				)
			},

			{
				Header: () => {
					return (
						<span>
							Diagnosis
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'diagnosis'
			},
			{
				Header: () => {
					return (
						<span>
							Gender
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'gender',
				getProps: (state, cellInfo, column) => {
					return {
						style: {
							color: cellInfo && cellInfo.row.gender === 'FEMALE' ? '#CBA2FF' : '#2781FF'
						}
					};
				},
				Filter: ({ filter, onChange }) => (
					<select
						onChange={(event) => onChange(event.target.value)}
						style={{ width: '100%' }}
						value={filter ? filter.value : 'all'}
					>
						<option value="All">All</option>
						<option value="MALE">MALE</option>
						<option value="FEMALE">FEMALE</option>
					</select>
				)
			},
			{
				Header: () => {
					return (
						<span>
							Age
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'age',
				id: 'over',
				Cell: ({ value }) => (value >= 21 ? value : value),
				filterMethod: (filter, row) => {
					if (filter.value === 'all') {
						return true;
					}
					if (filter.value === 'true') {
						return row[filter.id] >= 21;
					}
					return row[filter.id] < 21;
				},
				Filter: ({ filter, onChange }) => (
					<select onChange={(event) => onChange(event.target.value)} value={filter ? filter.value : 'all'}>
						<option value="all">All</option>
						<option value="true">more 21 </option>
						<option value="false">less 21</option>
					</select>
				)
			},
			{
				Header: () => {
					return (
						<span>
							Date of Service
							<i className="fa fa-long-arrow-up" />
							<i className="fa fa-long-arrow-down" />
						</span>
					);
				},
				accessor: 'dateCreated'
			},
			{
				columns: [
					{
						Header: 'Actions',
						headerClassName: 'action_Header',

						Filter: () => <label>Asign</label>,

						Cell: (props) => {
							return (
								<button>
									<img src={Assign_icon} />
								</button>
							);
						}
					},
					{
						Filter: () => <label>Refer</label>,

						Cell: (props) => {
							return (
								<button
									onClick={() => {
										//  this.deleteRow(props.original.id)
									}}
								>
									<img src={Refer_icon} />
								</button>
							);
						}
					}
				],

				sortable: false,
				filterable: false
			}
		];

		return (
			<Container fluid={true}>
				<Row>
					<ReactTable
						PaginationComponent={pagination}
						columns={columns}
						previousText={`<`}
						nextText={'>'}
						data={this.state.data}
						filterable
						defaultPageSize={10}
						noDataText={'please wait ...'}
						selectableRows
						expandableRows
					/>
				</Row>
			</Container>
		);
	}
}

export default Table;
