import React, { useEffect, useState } from "react";
import UserInput from "../userinputs/UserInput";
import './LoginForm.css';
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginable, setLoginable] = useState(false);

    useEffect(() => {
        if (id.length > 0 && password.length > 0) {
            setLoginable(true);
        } else {
            setLoginable(false);
        }
    }, [id, password]);

    const loginHandle = () => {
        console.log(`id: ${id}, password: ${password}`);
        // 나중에 백엔드와 연동하여 로그인 처리
        // 로그인 성공 시
        navigate('/');
    }

    const registerHandle = () => {
        console.log('register');
        navigate('/register');
    }

    return (
        <div className="login-form">
            <h1 className="login-title">PG 로그인</h1>

            <div className="interaction-group">
                <UserInput
                    id="id"
                    label="아이디"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <UserInput
                    id="password"
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* <div className="checkbox-group">
                    <input type="checkbox" id="auto-login" />
                    <label htmlFor="auto-login">자동 로그인</label>
                    <input type="checkbox" id="save-id" />
                    <label htmlFor="save-id">아이디 저장</label>
                </div> */}

                <div className="button-group">
                    <button type="button" className="login-button" onClick={loginHandle} disabled={!loginable}>로그인</button>
                    <button type="button" className="register-button" onClick={registerHandle}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
