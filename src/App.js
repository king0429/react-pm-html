import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import route from './router/index.js'
import Nav from './pages/nav/nav';
import './App.css';
import './reset.less';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container' style={{height: '100%'}}>
          <Nav />
          {
            route.map((val, index) => {
              return <Route exact path={val.url} key={index} component={val.name}></Route>
            })
          }
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
