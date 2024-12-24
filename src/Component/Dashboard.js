import React from 'react';
import Layout from './layout/layout';

function Dashboard({ onLogout }) {
  return <Layout onLogout={onLogout} />
}

export default Dashboard;
