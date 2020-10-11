import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value || '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    if (event.key === 'Enter') {
      this.props.onChange(this.state.value);
      this.setState({ value: '' });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onKeyUp={this.handleKeyUp}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputBox;
