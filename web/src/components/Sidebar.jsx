// src/components/Sidebar.jsx
import React from 'react';
import { FaBook, FaThLarge, FaUser, FaTicketAlt, FaStickyNote, FaFileAlt, FaProjectDiagram, FaChartBar, FaDatabase, FaFolderOpen, FaAngleDoubleLeft } from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* 최상단 아이콘 섹션 */}
      <div className="sidebar-icon-group">
        <button className="sidebar-icon-btn">
          <FaBook size={20} />
        </button>
      </div>

      <hr className="sidebar-divider" />

      {/* 중앙 아이콘 섹션 */}
      <div className="sidebar-icon-group">
        <button className="sidebar-icon-btn">
          <FaThLarge size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaUser size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaTicketAlt size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaStickyNote size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaFileAlt size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaProjectDiagram size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaChartBar size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaDatabase size={20} />
        </button>
        <button className="sidebar-icon-btn">
          <FaFolderOpen size={20} />
        </button>
      </div>

      <hr className="sidebar-divider" />

      {/* 하단 아이콘 섹션 */}
      <div className="sidebar-icon-group">
        <button className="sidebar-icon-btn">
          <FaAngleDoubleLeft size={20} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
