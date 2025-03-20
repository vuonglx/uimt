import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="top-bar-brand">Admin Panel</div>
      <nav className="top-bar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/organizations" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Tổ chức
        </NavLink>
        <NavLink to="/companies" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Công ty
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Người dùng
        </NavLink>
        <NavLink to="/departments" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Phòng ban
        </NavLink>
        <NavLink to="/teams" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Đội nhóm
        </NavLink>
        <NavLink to="/roles" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Vai trò
        </NavLink>
        <NavLink to="/menu-management" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Menu
        </NavLink>
        <NavLink to="/" className="logout-link">
          Đăng xuất
        </NavLink>
      </nav>
    </header>
  );
};

export default TopBar;