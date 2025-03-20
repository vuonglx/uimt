import React from 'react';

const Button = ({ children, type = 'primary', onClick }) => {
  const styles = {
    primary: { backgroundColor: '#0f62fe', color: 'white' },
    secondary: { backgroundColor: '#757575', color: 'white' },
    success: { backgroundColor: '#24a148', color: 'white' },
    danger: { backgroundColor: '#da1e28', color: 'white' },
    warning: { backgroundColor: '#f1c21b', color: 'black' },
  };

  return (
    <button
      style={{ ...styles[type], padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;