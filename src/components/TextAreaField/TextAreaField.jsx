import React from 'react';
import styles from './TextAreaField.css';

const TextAreaField = ({ label, value, onChange, required }) => {
  return (
    <div className={styles.textAreaField}>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextAreaField;