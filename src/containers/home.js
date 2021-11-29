import React from 'react';

import Menu from '../components/menu';
import Logo from '../components/logo';
import Search from '../components/search';
import Post from '../components/post';
import Photo from '../components/photo';
import post_info from '../sources/post_data/post';
import user_info from '../sources/users_data/users';


class Home extends React.Component {

  //post_render generate Posts from data base in Home Component
  post_render = () => {
    let posts_length = [];

    for (let i = 0; i < post_info.post.main.length; i++) {
      posts_length.push(<Post name={i} />);
    }

    return posts_length;
  };

  relations_render = () => {
    let relations_length = [];
    console.log(user_info)
    for (let i = 0; i < user_info.user.main.length; i++) {
        relations_length.push(<div className="relations__image"><img src={user_info.user.main[i].image}></img><p>{user_info.user.main[i].login}</p></div>);
    }

    return relations_length;
  }

  //render Home
  render() {
    const { active, user } = this.props
    return <div className="home">

      <div className="intro">
        <Logo /><Search /><Menu active={active} />
      </div>

      <div className="relations">
        <div className="relations__bar">
            {this.relations_render()}
          </div>
      </div>
      <div className="post">

        {this.post_render()}

      </div>
    </div>
  }
}

export default Home;