import React from 'react';

class Task extends React.Component{
  constructor(props){
    super(props);
    this.state = {isOver: false}
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(){
    this.setState({isOver: true});
  }

  handleMouseLeave(){
    this.setState({isOver: false});
  }
  
  getColor(status){
    const colors = ['lightblue', 'orange', 'mediumseagreen'];
    return colors[status];
  }

  render(){
    const {task, onClick, taskId, deleteTask} = this.props;
    const color = this.getColor(task.status);
    const textDecoration = task.status === 2 ? 'line-through' : 'none';
    const taskDetails = (
          <div style={{display:'flex'}}onClick={() => onClick(taskId)}>
            <p style={{ backgroundColor: color, width: '10px' }}></p>
            <p style={{ textDecoration, marginLeft: '10px' }}>{task.value}</p>
          </div>
        );
    return (<div style={{ display: 'flex', cursor: 'pointer',justifyContent: "space-between" }}
    onMouseOver={this.handleMouseOver}
    onMouseLeave={this.handleMouseLeave}
    >
      <div>{taskDetails}</div>
      {this.state.isOver ? <p onClick={() => deleteTask(taskId)}>X</p> : ''}
    </div>)
  }
}

export default Task;
