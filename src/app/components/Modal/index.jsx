import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  handleClose = () => {
    this.props.closeModal();
  }
  render() {
    const { children, showModal } = this.props;
    if(!showModal) {
      return null;
    }
    return (
      <div className="modalContainer">
        <div className="modalOverlay">
          <div className="modalContent">
          <button onClick={this.handleClose}>Close</button>
          {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
