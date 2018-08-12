import React, { Component } from 'react';


class MessageList extends Component{
  constructor(props){
    super(props);

    this.state = ({
      messages: [],
      content: ''
    });

    this.messagesRef = this.props.firebase.database().ref('messages');

  }

  componentDidMount(){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({
        messages: this.state.messages.concat(message)
      });
    })
  }

  handleInput = (e) => {
    this.setState({
      content: e.target.value,
    });
  }

  addMessage = (e) => {
    console.log(this.state.content);
    // e.preventDefault();
    // this.messagesRef.push( {
    //   content: this.state.content,
    //   roomId: this.props.roomId,
    //   sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
    //   username: this.props.user.displayName
    // });
  }
  renderInput = () => {
    return
      <div className="new-message">
        <input
          className="input-message"
          placeholder="Write a new Message..."
          onChange={this.handleInput}
          value={this.state.newMessage}
        />
        <button className="btn-message"
          onClick={this.addMessage}
          >Add New Message</button>
      </div>

  }
  render(){
    let messageInput;
    if(this.props.activeRoom !== ''){
      messageInput = <div className="new-message">
        <input
          className="input-message"
          placeholder="Write a new Message..."
          onChange={this.handleInput}
          value={this.state.newMessage}
        />
        <button className="btn-message"
          onClick={this.addMessage}
          >Add New Message</button>
      </div>;
    }
    return (
      <div>
        <ul className="message-list">
        {
          this.state.messages.map((message, index) =>{
            if(this.props.activeRoom.key == message.roomId){
              return <li key={index} className="message-item">
                <span className="msg-username">{message.username}</span>
                <div className="msg-content">{message.content}</div>
                <span className="msg-time">{message.sentAt}</span>

              </li>
            }
            null;
          })
        }
      </ul>
        {messageInput}
      </div>
    )
  }
}


export default MessageList;
