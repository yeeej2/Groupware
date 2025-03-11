import React from 'react';
import Sidebar from './components/Sidebar';
import CustomerL from './pages/customer/CustomerL';

import './App.css';

function App() {
  return (
    /* 전체 화면 */
    <div className="layout">
      {/* 사이드 바 */}
      <div className="container">
        <Sidebar />
      </div>
      {/* 메인 화면 */}
      <div className="main-content">
        <CustomerL />
      </div>
    </div>
  );
}

export default App;
