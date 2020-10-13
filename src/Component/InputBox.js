import React, { useState } from 'react';

const InputBox = (props) => {
  const [value, setValue] = useState(props.value || '');

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      props.onChange(value);
      setValue('');
    }
  };

  return (
    <input
      type="text"
      value={value}
      onKeyUp={handleKeyUp}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default InputBox;
