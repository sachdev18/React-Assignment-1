import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

 state = {
   login: [
    {userName: "Sachdev"} 
   ]
 }
 
userNameHandler = (event) => {
  this.setState({
    login: [
      {userName: event.target.value} 
     ]
  })
  {console.log(event.target.value)}
  {console.log("username", this.userName)}
}

  render() {
    return (
      <div className="App">
        <UserInput change={this.userNameHandler} />
        <UserOutput uName={this.state.login[0].userName} />
        {console.log(this.uName)}
        {console.log(this.change)}
      </div>
    );
  }
}

export default App;
