import React, { Component } from 'react';

class RoomForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      newRoomName: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.addRoomName = this.addRoomName.bind(this);
  }

  handleInput(e){
    this.setState({
      newRoomName: e.target.value,
    });
  }

  addRoomName(){
    this.props.addRoomName(this.state.newRoomName);
    this.setState({
      newRoomName: '',
    });
  }

  render(){
    return (
      <div className="RoomForm">
        <input placeholder="Write a new Room Name..."
          onChange={this.handleInput}
          value={this.state.newRoomName}
        />
        <button className="btn btn-info"
          onClick={this.addRoomName}
          >Add New Room</button>
      </div>
    );
  }
}

export default RoomForm;
