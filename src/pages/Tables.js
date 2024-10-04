import React from 'react'

import addIcon from '../assets/images/addIcon.svg'
import filterIcon from '../assets/images/filterIcon.svg'
import TableComponent from '../components/ReusableComponents/TableComponent';
import ArrowLeft from '../assets/images/arrow-square-left.svg'
import ArrowRight from '../assets/images/arrow-square-right.svg'
import { Modal } from 'antd';
import {   Form, Input } from 'antd';
const tableData = [
  {
    name: 'Ralph Edwards',
    mrNo: 'SDF45678543',
    gender: 'Female',
    accession: '123RND',
    doctor: 'Cody Fisher',
    status: 'Completed',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Completed',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Completed',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },
  {
    name: 'Jane Cooper',
    mrNo: 'XYZ12345678',
    gender: 'Male',
    accession: '987XYZ',
    doctor: 'Dr. Strange',
    status: 'Pending',
  },


];

const DashboardIcons = [
  { src: addIcon, alt: 'addIcon' },
  { src: filterIcon, alt: 'filterIcon' },
];


const handlePageChange = (key) => {
  console.log(key);

}
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function Tables() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className=' flex-column flex-grow-1'  >
        <div className='flex-grow-1 mb-3 card p-2'>
          <div className='subTitleFont p-2'>
            <div className=' d-flex justify-content-between align-items-center flex-wrap'>

              <div>Patient</div>

              <div className="d-flex flex-wrap gap-2 align-items-center ">
                <div className="search-container">
                  <input type="text" className="form-control border input-search" placeholder="Search by Name, Case ID, Accession" />
                </div>
                <div className="d-flex flex-wrap">
                  <Modal title="Registration Form" centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} width={1000} >
                    <Form name="basic" labelCol={{   span: 8, }} wrapperCol={{   span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
                      <Form.Item label="Username" name="username" rules={[ { required: true},]} >
                        <Input />
                      </Form.Item>
                      <Form.Item label="Doctor" name="Doctor" rules={[   { required: true},]}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="MR.NO" name="MR.NO" rules={[   { required: true},]}>
                        <Input />
                      </Form.Item>
                      <Form.Item label="Gender" name="Gender" rules={[   { required: true},]}>
                        <Input />
                      </Form.Item>
                    </Form>
                  </Modal>
                  <img className='dashBoardIcon' src={DashboardIcons[0].src} alt={DashboardIcons[0].alt} onClick={() => setOpen(true)} />
                  <img className='dashBoardIcon' src={DashboardIcons[1].src} alt={DashboardIcons[1].alt} />
                </div>
              </div>
            </div>
          </div>

          <div className="row mx-2 p-1  rounded patientPara px-4">
            <div className="col-lg-3 col-md-6 p-1">
              <div className="form-check p-1 px-2">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  No Transferable Embryos
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-1">
              <div className="form-check p-1 px-2">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  All Transferable Embryos
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-1">
              <div className="form-check p-1 px-2">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  Draft Patients
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-1">
              <div className="form-check p-1 px-2">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  International Patients
                </label>
              </div>
            </div>

          </div>

          <div className='m-2 flex-grow-1' style={{ overflow: 'auto' }}>
            <TableComponent data={tableData} />
            <div className='paginationDiv'>
              <span>Showing 1 to 3 of 10 entries</span>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <li className="page-item disabled">
                    <button className="page-link" disabled aria-label="Previous">
                      <img src={ArrowLeft} alt="Previous" />
                    </button>
                  </li>
                  <li className="page-item"><button className="page-link" onClick={() => handlePageChange(1)}>1</button></li>
                  <li className="page-item"><button className="page-link" onClick={() => handlePageChange(2)}>2</button></li>
                  <li className="page-item"><button className="page-link" onClick={() => handlePageChange(3)}>3</button></li>
                  <li className="page-item">
                    <button className="page-link" onClick={() => handlePageChange('next')} aria-label="Next">
                      <img src={ArrowRight} alt="Next" />
                    </button>
                  </li>
                </ul>
              </nav>

            </div>
          </div>




        </div>

      </div>
      <div className='patientlis-footer' style={{ position: 'fixed', bottom: '0', width: '100vw', marginBottom: '10px' }}>
        <div>
          <span className='totalpatientcount'>Total : 29</span>
        </div>

      </div>
    </>
  )
}