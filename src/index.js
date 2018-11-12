import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.frames.$time = (str, key) => {
  if (key === 1) {
    return str.substring(0, str.indexOf('T'))
  } else if (key === 2) {
    return str.substring(str.indexOf('T') + 1, str.indexOf('.'))
  } else {
    return str.replace('T', ' ').substr(0, str.indexOf('.'))
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
