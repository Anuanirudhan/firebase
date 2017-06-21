import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import ListItem from './ListItem'

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyBHAB57sHARNZ0zfVoRCoO-6_NZiKAGSkc",
      authDomain: "my-project-38352.firebaseapp.com",
      databaseURL: "https://my-project-38352.firebaseio.com",
      projectId: "my-project-38352",
      storageBucket: "my-project-38352.appspot.com",
      messagingSenderId: "635862144934"
    };
    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }
  render() {
    return (
      <ListItem database={this.app.database} />
    );
  }
}

export default App;
