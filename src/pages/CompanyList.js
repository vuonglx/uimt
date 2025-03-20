import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Table from '../components/Table';

const CompanyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockData = [
        { id: 1, name: 'Company A', code: 'CA001', address: 'Hà Nội', phone: '0123456789', email: 'ca@example.com', taxCode: '12345', active: 'Yes' },
        { id: 2, name: 'Company B', code: 'CB002', address: 'TP.HCM', phone: '0987654321', email: 'cb@example.com', taxCode: '67890', active: 'No' },
      ];
      setData(mockData);
    };
    fetchData();
  }, []);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Tên công ty', sortable: true, filterable: true },
    { key: 'code', label: 'Mã', sortable: true, filterable: true },
    { key: 'address', label: 'Địa chỉ', filterable: true },
    { key: 'phone', label: 'Số điện thoại', filterable: true },
    { key: 'email', label: 'Email', filterable: true },
    { key: 'taxCode', label: 'Mã số thuế', filterable: true },
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
          <h1>Quản lý Công ty</h1>
          <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
};

export default CompanyList;