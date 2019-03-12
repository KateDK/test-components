import React from 'react';
//import { threadId } from 'worker_threads';

class Input extends React.Component {
  onChange = evt => {
    const { onChange, disabled } = this.props;
    const { value } = evt.target;

    if (!disabled && onChange) {
      onChange(value);
    }
  };

  render() {
    const { value, error, disabled } = this.props;
    let className = '';
    if (error) {
      className += 'error ';
    }
    if (disabled) {
      className += 'disabled ';
    }
    return (
      <input className={className} value={value} onChange={this.onChange} />
    );
  }
}

export default Input;
