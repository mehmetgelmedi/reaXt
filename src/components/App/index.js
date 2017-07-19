import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ReaXt</h2>
        </div>
      </div>
    );
  }
}

export default App;