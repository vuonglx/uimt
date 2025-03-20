import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Table from '../components/Table';

const OrganizationList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, name: 'Tổ chức A', code: 'ORG001', address: '123 Đường ABC, Quận 1, TP.HCM', status: 'Hoạt động' },
        { id: 2, name: 'Tổ chức B', code: 'ORG002', address: '456 Đường XYZ, Quận 2, TP.HCM', status: 'Không hoạt động' },
      ];
      setData(mockData);
    };
    fetchData();
  }, []);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Tên tổ chức', sortable: true, filterable: true },
    { key: 'code', label: 'Mã', sortable: true, filterable: true },
    { key: 'address', label: 'Địa chỉ', filterable: true },
    { key: 'status', label: 'Trạng thái', sortable: true },
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
          <h1>Quản lý Tổ chức</h1>
          <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default OrganizationList;