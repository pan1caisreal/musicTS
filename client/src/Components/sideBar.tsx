import React from 'react';
import '../styles/main.scss';
import LanguageSwitcher from "./LanguageSwitcher";

type SidebarProps = {
    items: {text: string; icon: string}[]
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {

    return (
        <div className="sidebar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <div className="TextMenu">{item.text}</div>
                    </li>
                ))}
                <li>
                    <LanguageSwitcher />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
