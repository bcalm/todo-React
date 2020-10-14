import React, { useState } from 'react';
import '../ComponentCss/Todo.css';

const withHover = (Component, onClick) => {
  return (props) => {
    const [isOver, toggleIsOver] = useState(false);
    return (
      <div
        className="delete"
        onMouseEnter={() => toggleIsOver(true)}
        onMouseLeave={() => toggleIsOver(false)}
      >
        <Component {...props} />
        {isOver ? <p onClick={() => onClick(props.taskId)}>X</p> : <></>}
      </div>
    );
  };
};

export default withHover;
