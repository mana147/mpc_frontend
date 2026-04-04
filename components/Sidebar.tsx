'use client';

import './Sidebar.css';

interface SidebarProps {
  title: string;
  items: { label: string; href: string; active?: boolean }[];
}

export default function Sidebar({ title, items }: SidebarProps) {
  return (
    <div className="sidebar-menu">
      <h3 className="sidebar-menu-title">{title}</h3>
      <ul className="sidebar-menu-list">
        {items.map((item, index) => (
          <li key={index} className={item.active ? 'active' : ''}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
