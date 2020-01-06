import React, { Component } from 'react';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let link='https://twitter.com/intent/tweet?text=' + this.props.quote + ' - ' + this.props.author;
    return (
      <div id="control-panel">
        <button id="new-quote" className="btn btn-primary" onClick={this.props.newQuote}>New Quote</button> 
        <a id="tweet-quote" href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Tweet Quote</a>
      </div>
    );
  }
}

export default ControlPanel;