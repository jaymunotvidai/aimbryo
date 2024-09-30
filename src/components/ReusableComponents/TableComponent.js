import React from 'react';
import viewTable from '../../assets/images/viewTable.svg';
import uploadTable from '../../assets/images/uploadTable.svg';

const TableComponent = ({ data }) => {
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
          <tr key={index} className='customRow'>
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
    </table>
  );
};

export default TableComponent;
