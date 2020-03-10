import React, { Component } from 'react';
import { Modal, Select, Radio, Alert, Form, Upload, Button, Input, Icon, Tabs } from 'antd';
import { QrIcon } from './../../shared/Icons';
import './styles.scss';
import AddNewModel from './AddNewModel';
const { Option } = Select;
const deviceTypes = [ 'cardiac', 'hemodynamic', 'glucose', 'weight', 'motion', 'temperature' ];
const deviceModels = [
    'omron-10-series',
    'digital-blood-pressure-monitor',
    '1700-blood-pressure-monitor',
    'ua-767-plus-btc-ci',
    'blood-pressure-ua651ble',
    'new-model',
];
const { TabPane } = Tabs;

const FormItem = Form.Item;

let uuid = 0;
class NewDeviceModal extends Component {
    state = {
        newDevice: false,
        showSerial: false,
        selectModel: true,
        fileList: [],
        review: true,
        opportunityDetails: [
            {
                serialNumber1: 'Some data',
                serialNumber2: 'Some data',
                serialNumber3: 'Some data',
                serialNumber4: 'Some data',
                serialNumber5: 'Some data',
                serialNumber6: 'Some data',
                serialNumber7: 'Some data',
                serialNumber8: 'Some data',
                serialNumber9: 'Some data',
                serialNumber10: 'Some data',
                serialNumber11: 'Some data',
                serialNumber12: 'Some data',
                serialNumber13: 'Some data',
                serialNumber14: 'Some data',
                serialNumber15: 'Some data',
            },
        ].map((obj) => {
            const objKeys = Object.keys(obj);
            return objKeys.map((itemKey) => {
                return {
                    itemKey,
                    itemValue: obj[itemKey],
                };
            });
        }),
    };
    handleDeviceTypes = (value) => {
        console.log(value);
        this.setState({
            selectModel: false,
        });
    };
    handleDeviceModels = (value) => {
        if (value === 'new-model') {
            this.setState({
                newDevice: true,
                showSerial: false,
            });
        } else {
            this.setState({
                newDevice: false,
                showSerial: true,
            });
        }
    };
    handleRadioOptions = (e) => {
        console.log(e.target.value);
    };
    handleUploadChange = (info) => {
        let fileList = [ ...info.fileList ];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. Read from response and show file link
        fileList = fileList.map((file) => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });

        this.setState({ fileList });
    };
    capitalize(s) {
        const text = s.split('-').join(' ');
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('newkeys');
        form.setFieldsValue({
            newkeys: keys.filter((key) => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('newkeys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            newkeys: nextKeys,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { newDevice, selectModel, showSerial, review } = this.state;
        const UploadProps = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange: this.handleUploadChange,
            multiple: true,
        };
        const { getFieldDecorator, getFieldValue } = this.props.form;

        let newkeys = [];

        getFieldDecorator('newkeys', { initialValue: [] });
        newkeys = getFieldValue('newkeys');

        const formItems = newkeys.map((k, index) => {
            return (
                <FormItem key={k}>
                    {getFieldDecorator('serial', {
                        validate: [
                            {
                                trigger: [ 'onBlur' ],
                                rules: [
                                    {
                                        required: true,
                                        message: 'Serial Number Required!',
                                    },
                                ],
                            },
                        ],
                    })(
                        <div className="d-flex">
                            <Input placeholder="Enter Serial" suffix={<QrIcon />} />
                            <Button
                                type="link"
                                className="font-weight-bold d-flex align-items-center"
                                style={{ fontSize: 20, color: '#8992AD' }}
                                onClick={() => this.remove(k)}
                            >
                                <Icon type="close" />
                            </Button>
                        </div>,
                    )}
                </FormItem>
            );
        });
        const renderDynamicElWrapper = () => {
            return this.state.opportunityDetails.map((items) => {
                return renderDynamicEl(items);
            });
        };

        const renderDynamicEl = (els) => {
            return els.map((el) => {
                return (
                    <FormItem key={el.itemKey}>
                        {getFieldDecorator(el.itemKey, {
                            initialValue: el.itemValue,
                            validate: [
                                {
                                    trigger: [ 'onBlur' ],
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Serial Number Required!',
                                        },
                                    ],
                                },
                            ],
                        })(
                            <div className="d-flex">
                                <Input placeholder={el.itemValue} defaultValue={el.itemValue} />
                            </div>,
                        )}
                    </FormItem>
                );
            });
        };
        return (
            <Modal
                onCancel={this.props.handleCancel}
                width={560}
                title="New Device"
                visible={this.props.visible}
                footer={false}
            >
                <Form onSubmit={this.handleSubmit}>
                    <p className="font-weight-bold mb-2">1. Choose the device(s) model</p>

                    <div className="devices-header">
                        <div>
                            <p className="font-weight-bold mb-2">Device Type:</p>
                            <FormItem>
                                {getFieldDecorator('deviceType', {
                                    validate: [
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Device Type Required!',
                                                },
                                            ],
                                        },
                                    ],
                                })(
                                    <Select
                                        options={deviceTypes}
                                        placeholder="Choose"
                                        style={{ width: 220 }}
                                        onChange={this.handleDeviceTypes}
                                    >
                                        {deviceTypes.map((device) => (
                                            <Option value={device}>{this.capitalize(device)}</Option>
                                        ))}
                                    </Select>,
                                )}
                            </FormItem>
                        </div>
                        <div>
                            <p className="font-weight-bold mb-2">Device Model:</p>
                            <FormItem>
                                {getFieldDecorator('deviceModel', {
                                    validate: [
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Device Type Required!',
                                                },
                                            ],
                                        },
                                    ],
                                })(
                                    <Select
                                        disabled={selectModel}
                                        placeholder="Choose"
                                        style={{ width: 220 }}
                                        onChange={this.handleDeviceModels}
                                    >
                                        {deviceModels.map((device) => {
                                            if (device !== 'new-model') {
                                                return <Option value={device}>{this.capitalize(device)}</Option>;
                                            }
                                            return (
                                                <Option value={device}>
                                                    <p className="d-flex align-items-center m-0">
                                                        <Icon type="plus" />
                                                        <span className="ml-2">{this.capitalize(device)}</span>
                                                    </p>
                                                </Option>
                                            );
                                        })}
                                    </Select>,
                                )}
                            </FormItem>
                        </div>
                    </div>
                    {showSerial && (
                        <div>
                            <p className="  font-weight-bold my-3 ">2. Enter the serial number(s) for device(s)</p>
                            <div className="import-tabs ">
                                <Radio.Group name="radiogroup" defaultValue={1} onChange={this.handleRadioOptions}>
                                    <Tabs type="card">
                                        <TabPane tab={<Radio value={1}>Enter New Serial Number(s)</Radio>} key="1">
                                            {formItems}
                                            <FormItem>
                                                <Button
                                                    type="link"
                                                    className="font-weight-bold d-flex align-items-center"
                                                    onClick={this.add}
                                                >
                                                    <Icon type="plus" /> Add Serial Number
                                                </Button>
                                            </FormItem>
                                        </TabPane>
                                        <TabPane tab={<Radio value={2}>Import from an Excel sheet</Radio>} key="2">
                                            <Alert
                                                description="Please upload .xlsx with one column.Make sure the header is ‘Serial Number’"
                                                type="info"
                                                showIcon
                                            />
                                            <div className="upload-excel mt-3">
                                                {review && (
                                                    <FormItem>
                                                        <Upload {...UploadProps} fileList={this.state.fileList}>
                                                            <Button>
                                                                <Icon type="upload" /> Upload
                                                            </Button>
                                                        </Upload>
                                                    </FormItem>
                                                )}
                                                {!review && renderDynamicElWrapper()}
                                            </div>
                                        </TabPane>
                                    </Tabs>
                                </Radio.Group>
                            </div>
                            <div className="d-flex justify-content-end mt-3">
                                {!review && (
                                    <Button type="primary" htmlType="submit" className="mr-2">
                                        Submit
                                    </Button>
                                )}
                                {review && (
                                    <Button
                                        className="mr-2"
                                        type="primary"
                                        onClick={() =>
                                            this.setState({
                                                review: false,
                                            })}
                                    >
                                        Review
                                    </Button>
                                )}

                                <Button onClick={this.props.handleCancel}>Cancel</Button>
                            </div>
                        </div>
                    )}
                </Form>
                {newDevice && <AddNewModel handleUploadChange={this.handleUploadChange} />}
            </Modal>
        );
    }
}
export default Form.create()(NewDeviceModal);
