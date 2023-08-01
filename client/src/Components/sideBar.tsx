import React from 'react';
import './Sidebar.scss';

type SidebarProps = {
    items: {text: string; icon: string}[]
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {

    return (
        <div className="sidebar open">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
