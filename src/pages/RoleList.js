import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const RoleList = () => {
  const data = [
    { name: 'Admin', description: 'Quản trị viên hệ thống' },
    { name: 'User', description: 'Người dùng thông thường' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Danh sách Vai trò</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default RoleList;