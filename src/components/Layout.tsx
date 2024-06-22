import React from 'react';
import SideBar from '../components/SideBar.tsx';
import '../style/pages/Layout.css';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="main-page">
            <div className="wrapper">
                <SideBar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
