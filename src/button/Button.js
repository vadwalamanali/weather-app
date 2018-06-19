import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button id={this.props.id}
                type={this.props.type}
                name={this.props.name}>{this.props.value}</button>
      </div>
    );
  }
}

export default Button;
