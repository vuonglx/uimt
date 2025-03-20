import React from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import DashboardCard from '../components/DashboardCard';
import ActivityLog from '../components/ActivityLog';

const Dashboard = () => {
  const username = localStorage.getItem('username') || 'Admin';
  const stats = [
    { title: 'Tổ chức', count: 5, icon: '🏢' },
    { title: 'Công ty', count: 12, icon: '🏭' },
    { title: 'Người dùng', count: 45, icon: '👤' },
  ];

  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <SideNav />
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