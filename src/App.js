import React from 'react';
import './css/App.css';

import Start from './containers/start';
import Home from './containers/home';
import Explore from './containers/explore';
import Profile from './containers/profile';

class App extends React.Component {

  state = {
    start: true,
    home: false,
    explore: false,
    profile: false,


    session: null
  }

  //containerActiveHandler toogles the states of containers
  containersActiveHandler = (containerName) => {
    for (const stateItem in this.state) {
      if (stateItem == containerName) {
        this.setState({
          [stateItem]: true
        })
      }
      else {
        if(stateItem!="session"){
          this.setState({[stateItem]: false})
        } 
      }
      
    }
  }

  activeSession = (e,loggedUser) => {
    e.preventDefault()
    this.setState({ session: loggedUser });
  }

  render() {

    const { start, home, explore, session, profile } = this.state

    return (
      <div className="wrapper">
        {start ? <Start active={this.containersActiveHandler} activeSession={this.activeSession} /> : null}
        {home ? <Home active={this.containersActiveHandler} user={session}/> : null}
        {explore ? <Explore active={this.containersActiveHandler} /> : null}
        {profile ? <Profile active={this.containersActiveHandler} user={session}/> : null}
      </div>
    );
  }

}

export default App
