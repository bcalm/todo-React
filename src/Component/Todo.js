import React from 'react';
import Task from './Task';
import InputBox from './InputBox';
import Header from './Header';
import '../ComponentCss/Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], heading: 'Todo' };
    this.addNewTask = this.addNewTask.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.toggleCheckedStatus = this.toggleCheckedStatus.bind(this);
  }

  addNewTask(newTask) {
    this.setState((state) => {
      const tasks = state.tasks.slice();
      tasks.push({ status: 0, value: newTask });
      return { tasks };
    });
  }

  getNextState(taskId) {
    const currentStatus = this.state.tasks[taskId].status;
    return (currentStatus + 1) % 3;
  }

  toggleCheckedStatus(taskId) {
    this.setState((state) => {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      tasks[taskId].status = this.getNextState(taskId);
      return { tasks };
    });
  }

  updateHeading(newHeading) {
    this.setState({ heading: newHeading });
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
        <Header heading={this.state.heading} onChange={this.updateHeading} />
        <div> {tasks}</div>
        <InputBox onChange={this.addNewTask} />
      </div>
    );
  }
}

export default Todo;
