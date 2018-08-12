import React, { Component } from 'react';

class User extends Component{
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }
  googleIn = () => {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    let promise = this.props.firebase.auth().signInWithPopup(provider);

    promise.then(result => {
      let user = result.user;

      this.props.firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        name: user.displayName
      });
    });
    promise.catch(error => {
      let msg = error.message;
      let errorCode = error.code;
      console.log(msg, errorCode);
    });
  }
  googleOut = () => {
    this.props.firebase.auth().signOut().then(() => {
      this.setState({username: 'Guest'});
    }).catch((error) => {

    });
  }
  render(){
    return (
      <div className="user">
         <button
            onClick={() => this.googleIn()}
            id="googleIn"
            className="google">
            SignIn with Google
          </button>
          <button
            onClick={() => this.googleOut()}
            id="googleOut"
            className="google"
          >Log Out
        </button>
      <p>
        Howdy, {this.props.user ? this.props.user.displayName : 'Guest'}!
      </p>
      </div>
    );
  }
}

export default User;
