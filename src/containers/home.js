import React from 'react';

import Menu from '../components/menu';
import Logo from '../components/logo';
import Search from '../components/search';
import Post from '../components/post';

class Home extends React.Component {
    render() {
      return <div className="home">
      <Menu />
      <div className="intro">
        <Logo/><Search />
      </div>
  
      <div className="banner">
        <p className="banner__intro">Hello in gallery!</p>
      </div>
      <div className="post">
        <Post name='0'/>
        <Post name='1'/>
    
      </div>
      </div>
    }
}

export default Home;