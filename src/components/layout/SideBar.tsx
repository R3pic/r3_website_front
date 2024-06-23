import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
import { UserDTO } from '../../models/UserDTO';

const SideBar: React.FC = () => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState<UserDTO>({ id: '', name: '', introduction: '' });

    useEffect(() => {
        // TODO: 나중에 백엔드와 연결하여 사용자 정보를 가져올 수 있도록 합니다.
        // 예: setUser(fetchUserDataFromBackend());

        // 초기 사용자 정보 설정
        setUser({ id: 'user123', name: '사용자', introduction: '안녕하세요!' });
    }, []);

    return (
        <div className="side-bar">
            <img src="/icon.svg" alt="Logo" className="logo" />
            <button onClick={() => navigate('/home')}>홈</button>
            <button onClick={() => navigate('/search')}>검색</button>
            <button onClick={() => navigate('/notifications')}>알림</button>
            <button onClick={() => navigate('/profile')}>프로필</button>
            <button onClick={() => navigate('/settings')}>설정</button>

            <div className="side-bar-footer">
                <strong>닉네임 표시 : {user.name} <br/>아이디 표시 : {user.id}</strong>
            </div>
        </div>
    );
}

export default SideBar;
