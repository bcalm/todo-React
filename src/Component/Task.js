import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDone: false };
  }

  render() {
    const style = {
      backgroundColor: this.state.isDone ? 'mediumseagreen' : 'lightblue',
      width: '20px',
      marginLeft: '30px',
    };
    return (
      <div style={{ display: 'flex' }}>
        <p style={style}> &nbsp; &nbsp;</p>
        <p style={{ marginLeft: '20px' }}>{this.props.value}</p>
      </div>
    );
  }
}

export default Task;
