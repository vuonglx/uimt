import React from 'react';

const ActivityLog = () => {
  const logs = [
    { user: 'User1', action: 'Đăng nhập', time: '2025-03-20 10:00' },
    { user: 'User2', action: 'Cập nhật tổ chức', time: '2025-03-20 09:45' },
  ];

  return (
    <div className="activity-log">
      <h2>Nhật ký hoạt động gần đây</h2>
      <table>
        <thead>
          <tr>
            <th>Người dùng</th>
            <th>Hành động</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityLog;