import React, { Component } from 'react';
// import logo from './logo.svg';
import Nav from './pages/nav/nav';
import Index from './pages/index/index';
import './App.css';
import './reset.less';

class App extends Component {
  render() {
    return (
      <div className='container' style={{height: '100%'}}>
        <Nav />
        <Index />
      </div>
    );
  }
}

export default App;
