import React, { useState} from 'react';
import LoginPage from './pages/LoginPages';
import DashboardPage from './pages/DashboardPages';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    
    <div className="App">
      {isLoggedIn ? (
        <DashboardPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}
 export default App;