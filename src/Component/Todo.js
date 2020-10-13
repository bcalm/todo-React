import React, { useReducer } from 'react';
import Task from './Task';
import InputBox from './InputBox';
import withHover from './Hoverable';
import Header from './Header';
import '../ComponentCss/Todo.css';

const reducer = ({ tasks, heading }, action) => {
  switch (action.type) {
    case 'add-task': {
      tasks.push({ status: 0, value: action.value });
      return { tasks, heading };
    }

    case 'update-status': {
      const tasksCopy = JSON.parse(JSON.stringify(tasks));
      const currentStatus = tasks[action.value].status;
      const nextStatus = (currentStatus + 1) % 3;
      tasksCopy[action.value].status = nextStatus;
      return { tasks: tasksCopy, heading };
    }

    case 'delete-task': {
      tasks.splice(action.value, 1);
      return { tasks, heading };
    }

    case 'delete-all-task':
      return { tasks: [], heading: 'Todo' };

    case 'update-heading':
      return { tasks, heading: action.value };

    default:
      return { tasks, heading };
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [], heading: 'Todo' });

  const tasks = state.tasks.map((task, index) => {
    const HoverableTask = withHover(Task, (value) =>
      dispatch({ type: 'delete-task', value })
    );
    return (
      <HoverableTask
        task={task}
        taskId={index}
        key={index}
        onClick={(value) => dispatch({ type: 'update-status', value })}
      />
    );
  });
  const HoverableHeader = withHover(Header, () =>
    dispatch({ type: 'delete-all-task' })
  );
  return (
    <div className="todo">
      <HoverableHeader
        heading={state.heading}
        onChange={(value) => dispatch({ type: 'update-heading', value })}
      />
      <div> {tasks}</div>
      <InputBox onChange={(value) => dispatch({ type: 'add-task', value })} />
    </div>
  );
};

export default Todo;
