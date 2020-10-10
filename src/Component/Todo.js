import React from 'react';
import Task from './Task';
import InputBox from './InputBox';
import '../ComponentCss/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(newTask) {
    this.setState((state) => {
      const tasks = state.tasks.slice();
      tasks.push(newTask);
      return { tasks };
    });
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => {
      return <Task value={task} key={index} />;
    });
    return (
      <div className="todo">
        <h1>Todo</h1>
        <div> {tasks}</div>
        <InputBox onChange={this.addNewTask} />
      </div>
    );
  }
}

export default Todo;
