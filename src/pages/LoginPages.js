import React from 'react';
import LoginForm from '../Component/LoginForm';

function LoginPages({ onLogin }) {
  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  );
}

export default LoginPages;
