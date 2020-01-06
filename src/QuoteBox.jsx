import React, { Component } from 'react';
import ControlPanel from './ControlPanel';

const library = 
[{quote: 'Poor kids are just as bright, just as talented, as white kids.',
author: 'Joe Biden'},
{quote: 'Are you forgetting what you said two minutes ago? Are you forgetting already what you said just two minutes ago?',
author: 'Julian Castro'},
{quote: 'So I, sir, I have a feeling you know what you\'re doing. I\'m going to harness love for political purposes. I will meet you on that field, and sir, love will win.',
author: 'Marianne Williamson'}];

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
    this.newQuote = this.newQuote.bind(this);
  }
  componentDidMount() {
    this.newQuote();
  }
  newQuote() {
    let index = Math.floor(Math.random() * library.length);
    this.setState({
      quote: library[index].quote,
      author: library[index].author
    });
  }
  render() {
    return (
      <div id="quote-box">
        <h2 id="text">{this.state.quote}</h2>
        <h4 id="author">- {this.state.author}</h4>
        <ControlPanel newQuote={this.newQuote} quote={this.state.quote} author={this.state.author} />
      </div>
    );
  }
}
 
export default QuoteBox;