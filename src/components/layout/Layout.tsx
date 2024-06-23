import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar.tsx';
import './Layout.css';

const Layout: React.FC = () => {
    return (
        <div className="main-page">
            <SideBar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
