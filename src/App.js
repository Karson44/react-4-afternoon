import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <div className='links'>Home</div>
              <h1>HELLO WORLD</h1>
              <div className='links'>About</div> 
          </div>
        </nav>
      </div>
    )
  }
}