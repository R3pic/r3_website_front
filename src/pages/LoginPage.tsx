import React from "react";
import LoginForm from "../components/forms/LoginForm.tsx";
import './LoginPage.css';

interface LoginPageProps {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsLogin }) => {
    return (
        <div className="login-page">
            <LoginForm setIsLogin={setIsLogin}/>
        </div>
    );
}

export default LoginPage;