import React, { useEffect, useState } from 'react';
import Task from './Task';
import InputBox from './InputBox';
import withHover from './Hoverable';
import Header from './Header';
import PostAPI from './PostAPI';
import '../ComponentCss/Todo.css';

const Todo = () => {
  const [todo, setTodo] = useState({ heading: '', tasks: [] });

  const updateTodo = () => {
    PostAPI.getTodo().then(setTodo);
  };

  useEffect(updateTodo, []);

  const updateStatus = (taskId) => {
    PostAPI.updateStatus(taskId).then(updateTodo);
  };

  const addTask = (content) => {
    PostAPI.addTask(content).then(updateTodo);
  };

  const deleteTask = (taskId) => {
    PostAPI.deleteTask(taskId).then(updateTodo);
  };

  const updateHeading = (title) => {
    PostAPI.updateHeading(title).then(updateTodo);
  };

  const resetTodo = () => {
    PostAPI.resetTodo().then(updateTodo);
  };

  const tasks = todo.tasks.map((task, index) => {
    const HoverableTask = withHover(Task, deleteTask);

    return (
      <HoverableTask
        task={task}
        taskId={index}
        key={index}
        onClick={updateStatus}
      />
    );
  });

  const HoverableHeader = withHover(Header, resetTodo);
  return (
    <div className="todo">
      <HoverableHeader heading={todo.heading} onChange={updateHeading} />
      <div> {tasks}</div>
      <InputBox onChange={addTask} />
    </div>
  );
};

export default Todo;
