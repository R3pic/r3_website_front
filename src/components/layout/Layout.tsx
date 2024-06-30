import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar.tsx';
import './Layout.css';

interface LayoutProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ isLogin, setIsLogin }) => {

    return (
        <div className="main-page">
            <SideBar isLogin={isLogin} setIsLogin={setIsLogin} />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
