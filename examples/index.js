import './app.css';

import React, {Component} from 'react';
import HelloWorld from './components/hello.js';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('app')
);