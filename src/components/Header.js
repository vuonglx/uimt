import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Admin User';

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-brand">Admin Portal</div>
      <div className="header-user">
        <span>{username}</span>
        <button onClick={handleLogout} className="logout-button">Đăng xuất</button>
      </div>
    </header>
  );
};

export default Header;