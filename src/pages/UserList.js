import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const UserList = () => {
  const data = [
    { username: 'user1', fullName: 'Nguyen Van A', email: 'a@example.com', phone: '0123456789', roles: 'Admin', teams: 'Team A', active: 'Yes' },
    { username: 'user2', fullName: 'Tran Thi B', email: 'b@example.com', phone: '0987654321', roles: 'User', teams: 'Team B', active: 'No' },
  ];

  const columns = [
    { key: 'username', label: 'Username' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'roles', label: 'Roles' },
    { key: 'teams', label: 'Teams' },
    { key: 'active', label: 'Active' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Danh sách Người dùng</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default UserList;