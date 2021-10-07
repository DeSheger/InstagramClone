import React from 'react';

import Menu from '../components/menu';
import Logo from '../components/logo';
import Search from '../components/search';
import Post from '../components/post';
import post_info from '../sources/post_data/post';

import { activeUser } from '../sources/current_session/current';
class Home extends React.Component {

  //post_render generate Posts from data base in Home Component
  post_render = () => {
    let posts_length = [];

    for (let i = 0; i < post_info.post.main.length; i++) {
      posts_length.push(<Post name={i} />);
    }

    return posts_length;
  };

  //render Home
  render() {
    const { active, user } = this.props
    return <div className="home">

      <div className="intro">
        <Logo /><Search /><Menu active={active} />
      </div>

      <div className="banner">
        <p className="banner__intro">Welcome in gallery, {user.login}!</p>
      </div>
      <div className="post">

        {this.post_render()}

      </div>
    </div>
  }
}

export default Home;