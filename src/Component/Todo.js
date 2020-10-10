import React from 'react';
import Task from './Task';
import '../ComponentCss/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: ['buy milk', 'shopping'] };
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => {
      return <Task value={task} key={index} />;
    });
    return (
      <div className="todo">
        <h1 className="header">Todo</h1>
        {tasks}
      </div>
    );
  }
}

export default Todo;
