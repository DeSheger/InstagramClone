import React from 'react';
import './css/App.css';

import Start from './containers/start';
import Home from './containers/home';
import Message from './containers/message';
import Explore from './containers/explore';

function App() {
  return (
    <div className="wrapper">
      <Start/>
      <Home/>
      <Message/>
      <Explore/>
    </div>
  );
}

export default App;
