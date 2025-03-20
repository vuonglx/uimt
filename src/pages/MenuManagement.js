import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const MenuManagement = () => {
  const data = [
    { name: 'Dashboard', url: '/dashboard', icon: '🏠', order: 1, parent: '' },
    { name: 'Tổ chức', url: '/organizations', icon: '🏢', order: 2, parent: '' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'url', label: 'URL' },
    { key: 'icon', label: 'Icon' },
    { key: 'order', label: 'Order' },
    { key: 'parent', label: 'Parent' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Quản lý Menu</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default MenuManagement;