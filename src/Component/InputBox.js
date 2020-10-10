import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.key === 'Enter') {
      this.props.onChange(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return <input type="text" onKeyPress={this.handleChange} />;
  }
}

export default InputBox;
