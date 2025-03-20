import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OrganizationList from './pages/OrganizationList';
import CompanyList from './pages/CompanyList';
import UserList from './pages/UserList';
import DepartmentList from './pages/DepartmentList';
import TeamList from './pages/TeamList.js';
import RoleList from './pages/RoleList';
import MenuManagement from './pages/MenuManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/organizations" element={<OrganizationList />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route path="/teams" element={<TeamList />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/menu-management" element={<MenuManagement />} />
      </Routes>
    </Router>
  );
}

export default App;