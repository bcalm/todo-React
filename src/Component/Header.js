import React from 'react';
import InputBox from './InputBox';
import '../ComponentCss/Todo.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOver: false, editable: false };
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.makeEditable = this.makeEditable.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  makeEditable() {
    this.setState({ editable: true });
  }

  handleMouseOver() {
    this.setState({ isOver: true });
  }

  handleMouseLeave() {
    this.setState({ isOver: false });
  }

  handleChange(value) {
    this.props.onChange(value);
    this.setState({ editable: false });
  }

  render() {
    const heading = this.state.editable ? (
      <InputBox value={this.props.heading} onChange={this.handleChange} />
    ) : (
      <div className="headerContent">
        <p onClick={this.makeEditable}>{this.props.heading}</p>
        {this.state.isOver ? <p onClick={this.props.deleteAllTask}>X</p> : ''}
      </div>
    );
    return (
      <div
        className="header"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {heading}
      </div>
    );
  }
}

export default Header;
