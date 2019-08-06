import React from 'react';
import './App.css';

import UserCard from './components/userCard'
import FollowerCard from './components/followerCard'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    }
    console.log('constructor')
  }

  componentDidMount(){
    this.fetchUsers();
    this.fetchFollower();
    console.log('cdm')
  }

  fetchUsers = () => {
    fetch('https://api.github.com/users/Miguelperalta723')
    .then(res => res.json())
    .then(users => {
      this.setState({user: users});
      console.log(this.state.user)
      })
    .catch(err => {
        console.log(err);
      });
  }

  fetchFollower = () => {
    fetch('https://api.github.com/users/Miguelperalta723/followers')
    .then(res => res.json())
    .then(followers => {
      this.setState({followers: followers});
      console.log(this.state.follower)
      })
    .catch(err => {
        console.log(err);
      });
  }

  

  render(){
  console.log('render')
  return (
    <div className="App"> 
    <h2>Me</h2>
     <UserCard user={this.state.user}/>
     <h2>Followers</h2>
     {this.state.followers.map(follower => <FollowerCard follower={follower}/>
     )}
    </div>
    );
  }
}

export default App;
