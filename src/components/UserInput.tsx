import React from "react";
import "../style/components/UserInput.css";

interface UserInputProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput: React.FC<UserInputProps> = ({ id, label, type, placeholder, value, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="form-input"
            />
        </div>
    );
}

export default UserInput;
