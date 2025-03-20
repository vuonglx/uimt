import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Table from '../components/Table';

const DepartmentList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, name: 'Phòng IT', manager: 'Nguyen Van A', active: 'Yes' },
        { id: 2, name: 'Phòng HR', manager: 'Tran Thi B', active: 'No' },
      ];
      setData(mockData);
    };
    fetchData();
  }, []);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Tên phòng ban', sortable: true, filterable: true },
    { key: 'manager', label: 'Quản lý', filterable: true },
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
          <h1>Quản lý Phòng ban</h1>
          <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default DepartmentList;