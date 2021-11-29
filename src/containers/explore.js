import React from 'react';

import Menu from '../components/menu';
import Photo from '../components/photo';
import post_info from '../sources/post_data/post';

const style = {
  left: 0,
  width: '100%'
}

const listStyle = {
  flexBasis: '50%'
}

class Explore extends React.Component {

  //post_render generate Photos from data base in Explore Component
  post_render = () => {

    const posts_length = [];
    const container_name = "explore__container";

    //second loop count number of Photos in Containers
    const loop_for_posts = (used_containers) => {
      const photos = [];

      for (let i = used_containers * 4; i < (used_containers + 1) * 4 && i < post_info.post.main.length; i++) {
        photos.push(<div className="explore__post"><Photo name={i} /></div>)
      }

      //return ARRAY with Photos, which in next step will be placed in Container
      return photos;
    }


    //loop FOR count number of Containers
    //function loop_for_posts() count number of Photos inside each Container
    for (let containers = 0; containers <= (Math.floor(post_info.post.main.length / 4)); containers++) {
      posts_length.push(<div className={container_name}>
        {loop_for_posts(containers)}

      </div>);
    }

    //return Containers with Photos inside
    return posts_length;
  };

  //render Explore
  render() {
    const { active } = this.props
    return <div className="explore">
      <Menu style={style} listStyle={window.matchMedia('(max-width: 640)').matches?listStyle:null} active={active} />
      <div className="explore__main">

        {this.post_render()}

      </div>
    </div>
  }
}

export default Explore;