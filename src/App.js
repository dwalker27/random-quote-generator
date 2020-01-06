import React from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div className="container-fluid">
        <Nav />
        <QuoteBox />
      </div>
    );
  }
}

export default App;
