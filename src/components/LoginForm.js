import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Hook để điều hướng

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
    // Giả lập logic đăng nhập thành công (bạn có thể thay bằng gọi API thực tế)
    if (username && password) {
      navigate('/dashboard'); // Chuyển hướng sang trang Dashboard
    }
  };

  return (
    <div className="login-form-container">
      <img src="/logo.png" alt="Logo" className="logo" /> {/* Thay bằng đường dẫn logo */}
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