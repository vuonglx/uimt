import React from 'react';
import TopBar from '../components/TopBar';
import DashboardCard from '../components/DashboardCard';
import ActivityLog from '../components/ActivityLog';

const Dashboard = () => {
  const username = 'Admin'; // Thay bằng dữ liệu thực tế từ state hoặc API
  const stats = [
    { title: 'Tổ chức', count: 5, icon: '🏢' },
    { title: 'Công ty', count: 12, icon: '🏭' },
    { title: 'Người dùng', count: 45, icon: '👤' },
  ];

  return (
    <div className="dashboard">
      <TopBar />
      <div className="dashboard-content">
        <aside className="side-nav">Side Nav</aside>
        <main>
          <h1>Chào mừng, {username}!</h1>
          <div className="stats">
            {stats.map((stat, index) => (
              <DashboardCard key={index} {...stat} />
            ))}
          </div>
          <ActivityLog />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;