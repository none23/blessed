import React, { Component } from 'react';
import stylesheet from './stylesheet';

class Progress extends Component {
  constructor (props) {
    super(props);

    this.state = { progress: 0, color: 'red' };

    const interval = setInterval(
      () => {
        if (this.state.progress >= 100) { clearInterval(interval); }
        this.setState({ progress: this.state.progress + 1 });
      },
      50,
    );
  }

  render () {
    const { progress } = this.state;
    const label = `Progress - ${progress}%`;

    return (
      <progressbar
        label={label}
        onComplete={() => this.setState({ color: 'green' })}
        class={stylesheet.bordered} // eslint-disable-line
        filled={progress}
        top="60%"
        left="60%"
        width="40%"
        height="10%"
        style={{ bar: { bg: this.state.color } }}
      />
    );
  }
}

export default Progress;
