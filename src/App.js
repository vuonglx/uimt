import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OrganizationList from './pages/OrganizationList';
import CompanyList from './pages/CompanyList';
import UserList from './pages/UserList';
import DepartmentList from './pages/DepartmentList';
import TeamList from './pages/TeamList';
import RoleList from './pages/RoleList';
import MenuManagement from './pages/MenuManagement';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('username');
  console.log('isAuthenticated:', isAuthenticated); // Kiểm tra trạng thái đăng nhập
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/organizations" element={<ProtectedRoute><OrganizationList /></ProtectedRoute>} />
        <Route path="/companies" element={<ProtectedRoute><CompanyList /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
        <Route path="/departments" element={<ProtectedRoute><DepartmentList /></ProtectedRoute>} />
        <Route path="/teams" element={<ProtectedRoute><TeamList /></ProtectedRoute>} />
        <Route path="/roles" element={<ProtectedRoute><RoleList /></ProtectedRoute>} />
        <Route path="/menu-management" element={<ProtectedRoute><MenuManagement /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;