import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';
import { UserDTO } from '../../models/UserDTO';
import UserProfile from '../user/UserProfile';

const SideBar: React.FC = () => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState<UserDTO>({ id: '', name: '', introduction: '' });

    useEffect(() => {
        // TODO: 나중에 백엔드와 연결하여 사용자 정보를 가져올 수 있도록
        // 예: setUser(fetchUserDataFromBackend());
        setUser({ id: 'user123', name: '사용자이름', introduction: '안녕하세요!' });
    }, []);

    return (
        <div className="side-bar">
            <img src="/icon.svg" alt="Logo" className="logo" onClick={() => navigate('/home')}/>
            <button onClick={() => navigate('/home')}>홈</button>
            <button onClick={() => navigate('/search')}>검색</button>
            <button onClick={() => navigate('/notifications')}>알림</button>
            <button onClick={() => navigate(`${user.id}`)}>프로필</button>
            <button onClick={() => navigate('/settings')}>설정</button>

            <div className="side-bar-footer">
                <UserProfile
                    profilePicture="/Profile.webp"
                    name={user.name}
                    id={user.id}
                />
            </div>
        </div>
    );
}

export default SideBar;
