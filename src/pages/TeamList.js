import React from 'react';
import TopBar from '../components/TopBar';
import Table from '../components/Table';

const TeamList = () => {
  const data = [
    { name: 'Team A', leader: 'Nguyen Van C', active: 'Yes' },
    { name: 'Team B', leader: 'Le Thi D', active: 'No' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'leader', label: 'Leader' },
    { key: 'active', label: 'Active' },
  ];

  return (
    <div className="page">
      <TopBar />
      <main>
        <h1>Danh sách Đội nhóm</h1>
        <Table columns={columns} data={data} />
      </main>
    </div>
  );
};

export default TeamList;