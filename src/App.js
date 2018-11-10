import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import route from './router/index.js'
import Nav from './pages/nav/nav';
import Index from './pages/index/index';
import './App.css';
import './reset.less';

class App extends Component {
  super () {
    this.state = this.initalState()
  }
  initalState () {
    return {
      route
    }
  }
  render() {
    return (
      <div className='container' style={{height: '100%'}}>
        <BrowserRouter>
        <Nav />
        {
          this.state.route.map((val, index) => {
            return <Route exact path={val.url} key={index} component={val.name}></Route>
          })
        }
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
