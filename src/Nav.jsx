import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div id="nav">
        <nav id="top-nav">
          <div id="logo">2020 Election Gaffe Generator</div>
          <div id="contact">Contact</div>
        </nav>
      </div>
    );
  }
}

export default Nav;