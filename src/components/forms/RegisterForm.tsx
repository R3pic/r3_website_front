import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserInput from "../userinputs/UserInput";
import './RegisterForm.css';

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [registerable, setRegisterable] = useState(false);

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    useEffect(() => {
        const validateId = () => {
            if (id.length < 5) {
                setIdError('아이디는 최소 5자 이상이어야 합니다.');
                return false;
            }
            setIdError('');
            return true;
        }

        const validatePassword = () => {
            if (id.length === 0 || !isValidId) {
                setPasswordError('');
                return false;
            }

            if (password.length < 8) {
                setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
                return false;
            }
            if (!/[a-z]/.test(password)) {
                setPasswordError('비밀번호에는 최소 한 개의 소문자가 포함되어야 합니다.');
                return false;
            }
            if (!/[0-9]/.test(password)) {
                setPasswordError('비밀번호에는 최소 한 개의 숫자가 포함되어야 합니다.');
                return false;
            }
            if (!/[@$!%*?&#]/.test(password)) {
                setPasswordError('비밀번호에는 최소 한 개의 특수문자가 포함되어야 합니다.');
                return false;
            }
            setPasswordError('');
            return true;
        };

        const validateRepeatPassword = () => {
            if (password !== repeatPassword) {
                setRepeatPasswordError('비밀번호가 일치하지 않습니다.');
                return false;
            }
            setRepeatPasswordError('');
            return true;
        };

        const isValidId = validateId();
        const isValidPassword = validatePassword();
        const isValidRepeatPassword = validateRepeatPassword();

        setRegisterable(
            isValidId && isValidPassword && isValidRepeatPassword
        );
    }, [id, password, repeatPassword]);

    const registerHandle = () => {
        if (!registerable) return;

        console.log(`id: ${id}, password: ${password}로 회원가입 시도.`);
        // 나중에 백엔드와 연동하여 회원가입 처리
        // 회원가입 성공시 성공했다고 알려주고 3초뒤에 로그인 페이지로 이동
        setTimeout(() => {
            navigate('/login');
        }, 3000);
    };

    return (
        <div className="login-form">
            <h1 className="login-title">PG 회원가입</h1>

            <div className="interaction-group">
                <UserInput
                    id="id"
                    label="아이디"
                    type="text"
                    placeholder="아이디를 입력하세요"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <p className="validerror-message">{idError || ' '}</p>
                <UserInput
                    id="password"
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="validerror-message">{passwordError || ' '}</p>
                <UserInput
                    id="repeat-password"
                    label="비밀번호 확인"
                    type="password"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <p className="validerror-message">{repeatPasswordError || ' '}</p>
                <div className="button-group">
                    <button type="button" className="register-button" onClick={registerHandle} disabled={!registerable}>회원가입</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
