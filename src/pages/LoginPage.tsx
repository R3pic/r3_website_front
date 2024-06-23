import React from "react";
import LoginForm from "../components/forms/LoginForm.tsx";
import "../style/pages/LoginPage.css";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <LoginForm />
        </div>
    );
}

export default LoginPage;