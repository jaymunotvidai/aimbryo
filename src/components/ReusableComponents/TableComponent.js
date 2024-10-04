import React from 'react';
import viewTable from '../../assets/images/viewTable.svg';
import uploadTable from '../../assets/images/uploadTable.svg';

import { Modal } from 'antd';
import {   Form, Input   } from 'antd';


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const TableComponent = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const [form] = Form.useForm();
  const onClickHandle = (row) => {
    console.log("Button clicked", row);
    setOpen(true);
    const formData = {
      username: row.name,
      Doctor: row.doctor,
      "MR.NO": row.mrNo,
      Gender: row.gender,
    };
    form.setFieldsValue(formData);
  };
  return (
    <table className="table table-hover">
      <thead>
        <tr className='patientPara'>
          <th>Patient Name, MR No., Gender</th>
          <th>Accession#</th>
          <th>Doctor</th>
          <th>Notes</th>
          <th>Upload Consent</th>
          <th>Stim Report</th>
          <th>Result</th>
          <th>Report Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className='customRow' onClick={() => onClickHandle(row)}>
            <td>
              <p className='tableTitle m-0'>{row.name}</p>
              <a className='tableTitle' href="/patient">{row.mrNo} | {row.gender}</a>
            </td>
            <td className='tableTitle'>{row.accession}</td>
            <td className='tableTitle'>{row.doctor}</td>
            <td className='p-1'>
              <img src={viewTable} alt="viewTable" />
            </td>
            <td className='p-1' > <img src={uploadTable} alt="uploadTable" /></td>
            <td className='p-1' > <img src={viewTable} alt="viewTable" /></td>
            <td className='tableTitle' >Released</td>
            <td className='p-1'><img src={viewTable} alt="viewTable" /></td>
            <td>
              {row.status === 'Completed' ? (
                <img src={require('../../assets/images/completedTable.svg').default} alt="Completed" />
              ) : (
                <img src={require('../../assets/images/pendingTable.svg').default} alt="Pending" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <Modal title="Registration Form" centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} width={1000} >
        <Form form={form} name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
          <Form.Item label="Username" name="username" rules={[{ required: false },]} >
            <Input />
          </Form.Item>
          <Form.Item label="Doctor" name="Doctor" rules={[{ required: false },]}>
            <Input />
          </Form.Item>
          <Form.Item label="MR.NO" name="MR.NO" rules={[{ required: false },]}>
            <Input />
          </Form.Item>
          <Form.Item label="Gender" name="Gender" rules={[{ required: false },]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </table>
  );
};

export default TableComponent;
