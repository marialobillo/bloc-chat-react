import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD6Uo0XeXsot7vpJSByo340EOcS63KdA9I",
    authDomain: "bloc-chat-1adce.firebaseapp.com",
    databaseURL: "https://bloc-chat-1adce.firebaseio.com",
    projectId: "bloc-chat-1adce",
    storageBucket: "bloc-chat-1adce.appspot.com",
    messagingSenderId: "1029508064838"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <sidebar className="aside-menu">
          <h3 className="aside-title">Bloc Chat</h3>
          <RoomList firebase={firebase}/>
        </sidebar>
        <section className="content">
          This is for main content
        </section>
      </div>
    );
  }
}

export default App;
