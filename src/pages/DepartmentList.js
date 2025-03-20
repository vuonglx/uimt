import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const DepartmentList = () => {
  const data = [
    { name: 'Phòng IT', manager: 'Nguyen Van A', active: 'Yes' },
    { name: 'Phòng HR', manager: 'Tran Thi B', active: 'No' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'manager', label: 'Manager' },
    { key: 'active', label: 'Active' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Danh sách Phòng ban</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default DepartmentList;