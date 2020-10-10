import React from 'react';
import Task from './Task';
import InputBox from './InputBox';
import '../ComponentCss/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.addNewTask = this.addNewTask.bind(this);
    this.toggleCheckedStatus = this.toggleCheckedStatus.bind(this);
  }

  addNewTask(newTask) {
    this.setState((state) => {
      const tasks = state.tasks.slice();
      tasks.push({ checked: false, value: newTask });
      return { tasks };
    });
  }

  toggleCheckedStatus(taskId) {
    this.setState((state) => {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks[taskId].checked = !tasks[taskId].checked;
      return { tasks };
    });
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => {
      return (
        <Task
          task={task}
          taskId={index}
          key={index}
          onClick={this.toggleCheckedStatus}
        />
      );
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
