import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3030/api/words')
    .then(res => {
      console.log('res', res);
      // const posts = res.data.data.children.map(obj => obj.data);
      // console.log('posts', posts);
      // this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React :/</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
