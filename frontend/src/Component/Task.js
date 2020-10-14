import React from 'react';

const Task = ({ task, taskId, onClick }) => {
  const colors = ['lightblue', 'orange', 'mediumseagreen'];
  const color = colors[task.status];
  const textDecoration = task.status === 2 ? 'line-through' : 'none';
  return (
    <div style={{ display: 'flex' }} onClick={() => onClick(taskId)}>
      <p style={{ backgroundColor: color, width: '10px' }}></p>
      <p style={{ textDecoration, marginLeft: '10px' }}>{task.value}</p>
    </div>
  );
};

export default Task;
