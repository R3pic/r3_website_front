import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../style/pages/RegisterPage.css";

const RegisterPage: React.FC = () => {
    return (
        <div className="register-page">
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;