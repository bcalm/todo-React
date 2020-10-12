import React from 'react';
import InputBox from './InputBox';
import '../ComponentCss/Todo.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOver: false, editable: false };
    this.makeEditable = this.makeEditable.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  makeEditable() {
    this.setState({ editable: true });
  }

  handleChange(value) {
    this.props.onChange(value);
    this.setState({ editable: false });
  }

  render() {
    const heading = this.state.editable ? (
      <InputBox value={this.props.heading} onChange={this.handleChange} />
    ) : (
      <p onClick={this.makeEditable}>{this.props.heading}</p>
    );
    return <div className="header">{heading}</div>;
  }
}

export default Header;
