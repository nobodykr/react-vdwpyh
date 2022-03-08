import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('main'));

let demo = React.createElement(
  'h1',
  { style: { color: 'green' } },
  'Welcome to GeeksforGeeks'
);
ReactDOM.render(demo, document.getElementById('main'));
