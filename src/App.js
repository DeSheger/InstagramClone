import React from 'react';
import './css/App.css';

import Start from './containers/start';
import Home from './containers/home';
import Explore from './containers/explore';

class App extends React.Component {

  state = {
    start: true,
    home: false,
    message: false,
    explore: false,
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
        this.setState({
          [stateItem]: false
        })
      }
    }
  }

  render() {

    const { start, home, explore } = this.state
    
    return (
      <div className="wrapper">
        {start ? <Start active={this.containersActiveHandler} /> : null}
        {home ? <Home active={this.containersActiveHandler}/> : null}
        {explore ? <Explore active={this.containersActiveHandler}/> : null}
      </div>
    );
  }

}

export default App
