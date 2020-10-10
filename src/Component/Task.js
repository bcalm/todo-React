import React from 'react';

const Task = ({ task }) => {
  const color = task.checked ? 'mediumseagreen' : 'lightblue';
  const textDecoration = task.checked ? 'line-through' : 'none';
  return (
    <div style={{ display: 'flex' }}>
      <p style={{ backgroundColor: color, width: '10px' }}></p>
      <p style={{ textDecoration, marginLeft: '10px' }}>{task.value}</p>
    </div>
  );
};

export default Task;
