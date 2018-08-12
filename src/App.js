import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import RoomForm from './components/RoomForm';
import MessageList from './components/MessageList';
import User from './components/User';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD6Uo0XeXsot7vpJSByo340EOcS63KdA9I",
    authDomain: "bloc-chat-1adce.firebaseapp.com",
    databaseURL: "https://bloc-chat-1adce.firebaseio.com",
    projectId: "bloc-chat-1adce",
    storageBucket: "bloc-chat-1adce.appspot.com",
    messagingSenderId: "1029508064838"
  };


class App extends Component {
  constructor(props){
    super(props);
    this.addRoomName = this.addRoomName.bind(this);

    this.handleActiveRoom = this.handleActiveRoom.bind(this);

    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child('rooms');

    this.state = {
      rooms: [],
      activeRoom: '',
      user: ''
    }
  }
  handleActiveRoom = (activeRoom) => {
    this.setState({activeRoom})
  }

  addRoomName(room){
    //console.log(room);
    this.database.push().set({ name: room });
  }
  setUser = (user) => {
    this.setState({ user });
  }
  render() {
    return (
      <div className="row">
        <nav className="aside-menu">
          <h3 className="aside-title">Bloc Chat</h3>
          <RoomList
            firebase={firebase}
            handleActiveRoom={this.handleActiveRoom}
            activeRoom={this.state.activeRoom}
          />
          <RoomForm addRoomName={this.addRoomName} />
          <section className="user">
            <User
              firebase={firebase}
              setUser={this.setUser}
              user={this.state.user}
            />
          </section>
        </nav>
        <section className="content">
          <h2 className="activeRoom-title">{this.state.activeRoom.name}</h2>
          <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom}
            user={this.state.user}
          />
        </section>
      </div>
    );
  }
}

export default App;
