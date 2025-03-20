import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Table from '../components/Table';

const TeamList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, name: 'Team A', leader: 'Nguyen Van C', active: 'Yes' },
        { id: 2, name: 'Team B', leader: 'Le Thi D', active: 'No' },
      ];
      setData(mockData);
    };
    fetchData();
  }, []);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Tên đội nhóm', sortable: true, filterable: true },
    { key: 'leader', label: 'Trưởng nhóm', filterable: true },
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
          <h1>Quản lý Đội nhóm</h1>
          <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default TeamList;