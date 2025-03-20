import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const OrganizationList = () => {
  // Dữ liệu mẫu (có thể thay bằng dữ liệu từ API)
  const data = [
    { name: 'Org A', code: 'A001', address: 'Hà Nội', phone: '0123456789', email: 'a@example.com', active: 'Yes' },
    { name: 'Org B', code: 'B002', address: 'TP.HCM', phone: '0987654321', email: 'b@example.com', active: 'No' },
    { name: 'Org C', code: 'C003', address: 'Đà Nẵng', phone: '0912345678', email: 'c@example.com', active: 'Yes' },
  ];

  // Cấu hình cột
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'code', label: 'Code' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'active', label: 'Active' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Danh sách Tổ chức</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default OrganizationList;