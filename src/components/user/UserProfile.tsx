import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

interface UserProfileProps {
    profilePicture: string;
    name: string;
    id: string;
    isLogin: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ profilePicture, name, id, isLogin }) => {

    const navigate = useNavigate();
    const handleNameClick = () => {
        navigate(`/${id}`);
    };

    const handleLoginClick = () => {
        navigate('/login');
    }

    return (
        <div className="user-profile">
            {isLogin ? (
                <>
                    <img src={profilePicture} alt="Profile" className="profile-picture" onClick={handleNameClick} />
                    <div className="user-info">
                        <span className="user-name" onClick={handleNameClick}>{name}</span>
                        <span className="user-id">@{id}</span>
                    </div>
                </>
            ) : (
                <>
                    <button className="profile-login-button" onClick={handleLoginClick}>
                        로그인하기
                    </button>
                </>
            )}
        </div>
    );
};

export default UserProfile;
