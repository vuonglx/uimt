import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  return (
    <aside className="side-nav">
      <nav>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/organizations" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Tổ chức
        </NavLink>
        <NavLink to="/companies" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Công ty
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Người dùng
        </NavLink>
        <NavLink to="/departments" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Phòng ban
        </NavLink>
        <NavLink to="/teams" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Đội nhóm
        </NavLink>
        <NavLink to="/roles" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Vai trò
        </NavLink>
        <NavLink to="/menu-management" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Quản lý Menu
        </NavLink>
        <NavLink to="/audit-log" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Audit Log
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideNav;