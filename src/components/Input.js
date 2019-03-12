import React from 'react';
//import { threadId } from 'worker_threads';

class Input extends React.Component {
  onChange = evt => {
    const { onChange } = this.props;
    const { value } = evt.target;

    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const { value } = this.props;

    return <input value={value} onChange={this.onChange} />;
  }
}

export default Input;
