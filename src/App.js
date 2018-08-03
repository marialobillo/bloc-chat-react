import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6Uo0XeXsot7vpJSByo340EOcS63KdA9I",
    authDomain: "bloc-chat-1adce.firebaseapp.com",
    databaseURL: "https://bloc-chat-1adce.firebaseio.com",
    projectId: "bloc-chat-1adce",
    storageBucket: "bloc-chat-1adce.appspot.com",
    messagingSenderId: "1029508064838"
  };
  *.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
