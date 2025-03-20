import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('username', username); // Lưu username vào localStorage
      console.log('Đăng nhập thành công:', { username, password, rememberMe });
      navigate('/dashboard'); // Chuyển hướng đến Dashboard
    } else {
      console.error('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu');
    }
  };

  return (
    <div className="login-form-container">
      <img src="/logo.png" alt="Logo" className="logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Ghi nhớ đăng nhập
          </label>
          <a href="#" className="forgot-password">Quên mật khẩu?</a>
        </div>
        <button type="submit" className="login-button">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;