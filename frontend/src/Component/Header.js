import React, { useState } from 'react';
import InputBox from './InputBox';
import '../ComponentCss/Todo.css';

const Header = ({ heading, onChange }) => {
  const [isEditable, toggleEditableStatus] = useState(false);

  const handleChange = (value) => {
    onChange(value);
    toggleEditableStatus(false);
  };

  return (
    <div className="header">
      {isEditable ? (
        <InputBox value={heading} onChange={handleChange} />
      ) : (
        <p onClick={() => toggleEditableStatus(true)}>{heading}</p>
      )}
    </div>
  );
};

export default Header;
