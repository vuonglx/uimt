import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Table from '../components/Table';

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, username: 'user1', fullName: 'Nguyen Van A', email: 'a@example.com', phone: '0123456789', roles: 'Admin', teams: 'Team A', active: 'Yes' },
        { id: 2, username: 'user2', fullName: 'Tran Thi B', email: 'b@example.com', phone: '0987654321', roles: 'User', teams: 'Team B', active: 'No' },
      ];
      setData(mockData);
    };
    fetchData();
  }, []);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'username', label: 'Tên đăng nhập', sortable: true, filterable: true },
    { key: 'fullName', label: 'Họ tên', filterable: true },
    { key: 'email', label: 'Email', filterable: true },
    { key: 'phone', label: 'Số điện thoại', filterable: true },
    { key: 'roles', label: 'Vai trò', filterable: true },
    { key: 'teams', label: 'Đội nhóm', filterable: true },
    { key: 'active', label: 'Trạng thái', sortable: true },
    { key: 'actions', label: 'Thao tác' },
  ];

  const handleEdit = (row) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    setData(data.filter((item) => item.id !== row.id));
  };

  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <SideNav />
        <main>
          <h1>Quản lý Người dùng</h1>
          <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default UserList;