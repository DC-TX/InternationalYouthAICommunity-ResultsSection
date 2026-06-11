import React from "react";

export default function DockNav({ currentPage, setCurrentPage }) {
  const items = [
    { key: "home", label: "首页", icon: "⌂" },
    { key: "projects", label: "项目招募", icon: "◆" },
    { key: "results", label: "成果展示", icon: "★" }
  ];

  return (
    <div className="dock-nav">
      {items.map(item => (
        <button
          key={item.key}
          type="button"
          onClick={() => setCurrentPage(item.key)}
          className={`dock-item ${
            currentPage === item.key ? "dock-item-active" : ""
          }`}
        >
          <span className="dock-icon">{item.icon}</span>
          <span className="dock-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
