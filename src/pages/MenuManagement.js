import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Table from '../components/Table';

const MenuManagement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, name: 'Dashboard', url: '/dashboard', icon: '🏠', order: 1, parent: '' },
        { id: 2, name: 'Tổ chức', url: '/organizations', icon: '🏢', order: 2, parent: '' },
      ];
      setData(mockData);
    };
    fetchData();
  }, []);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Tên menu', sortable: true, filterable: true },
    { key: 'url', label: 'URL', filterable: true },
    { key: 'icon', label: 'Icon', filterable: true },
    { key: 'order', label: 'Thứ tự', sortable: true },
    { key: 'parent', label: 'Menu cha', filterable: true },
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
          <h1>Quản lý Menu</h1>
          <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default MenuManagement;