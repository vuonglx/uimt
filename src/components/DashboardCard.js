import React from 'react';

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="dashboard-card">
      <span className="card-icon">{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;