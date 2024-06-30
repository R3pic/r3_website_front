import React from "react";
import { useLocation } from "react-router-dom";
import PostList from "../components/posts/PostList";

const Profile: React.FC = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[1];

    return (
        <div>
            <h1>프로필 페이지</h1>

            <PostList target={id} />
        </div>
    );
}

export default Profile;