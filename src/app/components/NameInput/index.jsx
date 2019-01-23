import React, { Component } from 'react';

import './input.css';

class NameInput extends Component {
  handleChange = (event) => {
    this.props.nameInput(event.target.value);
  }
  render() {
    return (
      <input
        className="name-input"
        placeholder="search for name"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default NameInput;
