import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { UserDTO } from '../../models/UserDTO';
import { useCookies } from 'react-cookie';
import UserProfile from '../user/UserProfile';


import './SideBar.css';

interface SideBarProps {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({ isLogin, setIsLogin }) => {
    const [cookies, , removeCookie] = useCookies(['accessToken', 'refreshToken']);

    const navigate = useNavigate();
    
    const [user, setUser] = useState<UserDTO>({ id: '', name: '', introduction: '' });

    useEffect(() => {
        console.log("현재 쿠키 목록",cookies);
        const accessToken = cookies.accessToken
        if (!accessToken) {
            setIsLogin(false);
            return;
        }

        console.log("액세스 토큰",accessToken);

        const decoded = jwtDecode(accessToken);

        setUser({
            id: decoded.user_id,
            name: decoded.nickname,
            introduction: "",
        });

        const tokenDate = new Date(decoded.exp * 1000);
        const currentDate = new Date();
        
        console.log("토큰 만료일", tokenDate);
        console.log("현재 시간", currentDate);
        if (tokenDate < currentDate) {
            setIsLogin(false);
            console.log("토큰 만료됨");
            removeCookie('accessToken');
            return;
        }

        setIsLogin(true);

    }, []);

    return (
        <div className="side-bar">
            <img src="/icon.svg" alt="Logo" className="logo" onClick={() => navigate('/home')}/>
            <button className="sidebar-button" onClick={() => navigate('/home')}>홈</button>
            <button className="sidebar-button" onClick={() => navigate('/search')}>검색</button>
            <button className="sidebar-button" onClick={() => navigate('/notifications')}>알림</button>
            <button className="sidebar-button" onClick={() => navigate(`${user.id}`)}>프로필</button>
            <button className="sidebar-button" onClick={() => navigate('/settings')}>설정</button>

            <div className="side-bar-footer">
                <UserProfile
                    profilePicture="/Profile.webp"
                    name={user.name}
                    id={user.id}
                    isLogin={isLogin}
                />
            </div>
        </div>
    );
}

export default SideBar;
