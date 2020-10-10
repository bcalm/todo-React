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
      tasks.push({ status: 'undone', value: newTask });
      return { tasks };
    });
  }

  getNextState(taskId) {
    const taskStatus = ['undone', 'working', 'done'];
    const currentStatus = this.state.tasks[taskId].status;
    const nextIndex = (taskStatus.indexOf(currentStatus) + 1) % 3;
    return taskStatus[nextIndex];
  }

  toggleCheckedStatus(taskId) {
    this.setState((state) => {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks[taskId].status = this.getNextState(taskId);
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
