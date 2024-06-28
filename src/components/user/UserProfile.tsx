import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

interface UserProfileProps {
    profilePicture: string;
    name: string;
    id: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ profilePicture, name, id }) => {
    const navigate = useNavigate();
    const handleNameClick = () => {
        navigate(`/${id}`);
    };

    return (
        <div className="user-profile">
            <img src={profilePicture} alt="Profile" className="profile-picture" onClick={handleNameClick}/>
            <div className="user-info">
                <span className="user-name" onClick={handleNameClick}>{name}</span>
                <span className="user-id">@{id}</span>
            </div>
        </div>
    );
};

export default UserProfile;
