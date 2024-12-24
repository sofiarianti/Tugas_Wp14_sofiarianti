import React from 'react';
import Dashboard from '../Component/Dashboard';

function DashboardPages({ onLogout }) {
  return (
    <div>
      <Dashboard onLogout={onLogout} />;

    </div>
  );
}

export default DashboardPages;
