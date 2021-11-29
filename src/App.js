import React from 'react';
import './css/App.css';

import Start from './containers/start';
import Home from './containers/home';
import Explore from './containers/explore';
import Favourite from './containers/favourite';
import Profile from './containers/profile';

class App extends React.Component {

  state = {
    start: true,
    home: false,
    explore: false,
    favourite: false,
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

  cookieSession = (loggedUser) => {
    this.setState({
      session: loggedUser
    })
  }

  render() {

    const { start, home, explore, favourite, session, profile } = this.state

    return (
      <div className="wrapper">
        {start ? <Start active={this.containersActiveHandler} activeSession={this.activeSession} cookieSession={this.cookieSession}/> : null}
        {home ? <Home active={this.containersActiveHandler} user={session}/> : null}
        {explore ? <Explore active={this.containersActiveHandler} /> : null}
        {favourite ? <Favourite active={this.containersActiveHandler} user={session}/> : null}
        {profile ? <Profile active={this.containersActiveHandler} user={session}/> : null}
      </div>
    );
  }

}

export default App
