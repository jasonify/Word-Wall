import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      words: []
    };
  }

  addWord(word) {
    var self = this;
    axios.post('http://localhost:3030/api/word', {
      word: word 
    })
    .then(function (response) {
      console.log('res post', response);
      var words = response.data.words;
      console.log("words", words);
      self.setState({words})
    })
    .catch(function (error) {
      console.log('error', error);
    });

  }
  componentDidMount() {

    axios.get('http://localhost:3030/api/words')
    .then(res => {
      console.log('res', res);
      const words = res.data.results;
      this.setState({ words , currentWord: "" });
    });
  }


  handleClick(e){
    e.preventDefault();
    console.log("Adding word on Click!");
    console.log('word', this.state.word);
    this.addWord(this.state.word);
    this.setState({currentWord: ""});
    this.refs.wordInput.value = "";
  }

  handleChange(event){
    const word = event.target.value;
    // console.log('event', word);
    this.setState({ word});
  }

  render() {
    const wordEls = this.state.words.map((word, index) => {
      const key = "word-"+word+index;
      // console.log(key);
      return <span className='word' key={key}> {word} </span>
    });
    // for(var ii = 0; ii < 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Word Wall!</h2>
          <input className="word-input" type="text"  ref="wordInput"  onChange={this.handleChange.bind(this)}/>
          <a className="add-btn" href="#" onClick={this.handleClick.bind(this)}>
              Add Word
          </a>
        </div>
        <div className="words">
          {wordEls}
        </div>
      </div>
    );
  }
}

export default App;
