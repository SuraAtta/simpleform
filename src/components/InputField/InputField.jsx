import React from 'react';
import styles from './InputField.css';

const InputField = ({ label, type, value, onChange, required }) => {
    return (
        <div className={styles.inputField}>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default InputField;