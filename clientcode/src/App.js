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
  componentDidMount() {

    axios.post('http://localhost:3030/api/word', {
      word: 'Flintstone333'
    })
    .then(function (response) {
      console.log('res post', response);
    })
    .catch(function (error) {
      console.log('error', error);
    });


    axios.get('http://localhost:3030/api/words')
    .then(res => {
      console.log('res', res);
      const words = res.data.results;
      // const posts = res.data.data.children.map(obj => obj.data);
      // console.log('posts', posts);
      this.setState({ words });
    });
  }

  render() {
    var wordEls = [];
    let words = this.state.words;
    words.forEach((word)=> {
      console.log( word);
      wordEls.push(<div> {word}  </div>);
    });
    // for(var ii = 0; ii < 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Word Wall /</h2>
        </div>
        <p className="App-intro">
         
          {wordEls}
        </p>
      </div>
    );
  }
}

export default App;
