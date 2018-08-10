import React, { Component } from 'react';


class MessageList extends Component{
  constructor(props){
    super(props);

    this.state = ({
      messages: []
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

  render(){
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
      </div>
    )
  }
}


export default MessageList;
