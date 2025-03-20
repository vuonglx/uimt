import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const CompanyList = () => {
  const data = [
    { name: 'Company A', code: 'CA001', address: 'Hà Nội', phone: '0123456789', email: 'ca@example.com', taxCode: '12345', active: 'Yes' },
    { name: 'Company B', code: 'CB002', address: 'TP.HCM', phone: '0987654321', email: 'cb@example.com', taxCode: '67890', active: 'No' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'code', label: 'Code' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'taxCode', label: 'Tax Code' },
    { key: 'active', label: 'Active' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Danh sách Công ty</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default CompanyList;