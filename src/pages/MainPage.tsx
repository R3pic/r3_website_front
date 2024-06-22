import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
    const navigate = useNavigate();
    const GotoLoginPage = () => {
        navigate('/login');
    }
    return (
        <div>
            <h1>Main Page</h1>
            <button type="button" onClick={GotoLoginPage}>로그인</button>
        </div>
    );
}

export default MainPage;