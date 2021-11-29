import React from 'react';

import post_info from '../sources/post_data/post';
import Photo from './photo';

class Post extends React.Component {


  post_show = () => {
    let id = post_info.post.main[this.props.name].id;
    const mediaQuery = window.matchMedia('(min-width: 640px)');

    const post = document.querySelector(`.post__container[id='${id}']`);
    const close = document.querySelector(`.post__container[id='${id}'] .post__close`);
    const post_all = document.querySelectorAll(`.post__container:not(.post__container[id='${id}'])`);
    const relations = document.querySelector('.relations');
    const intro = document.querySelector('.intro');

    console.log(post_all);

    close.style.display = "flex";

    post.style.position = "fixed";


    if (mediaQuery.matches) {
      post.style.left = "50%";
      post.style.height = "60vh";
      post.style.top = "50%";
      post.style.marginright = "-50%";
      post.style.transform = "translate(-50%, -50%)";
      post.style.zindex = "3";
      intro.style.display = "none";
      relations.style.display = "none";
      for (let i = 0; i < post_all.length; i++) {
        post_all[i].style.display = "none";
      }
    }
    else {
      post.style.left = "0";
      post.style.height = "100vh";
      post.style.width = "100vw";
      post.style.top = "0";
    }
    post.style.overflow = "auto";

    post.style.margintop = '0';
    post.style.marginbottom = '0';

  }


  post_hidden = () => {
    let id = post_info.post.main[this.props.name].id;
    const mediaQuery = window.matchMedia('(min-width: 640px)');

    const post = document.querySelector(`.post__container[id='${id}']`);
    const close = document.querySelector(`.post__container[id='${id}'] .post__close`);
    const post_all = document.querySelectorAll(`.post__container:not(.post__container[id='${id}'])`);
    const relations = document.querySelector('.relations');
    const intro = document.querySelector('.intro');

    close.style.display = "none";

    post.style.position = "static";
    post.style.top = "auto";
    post.style.left = "auto";
    post.style.height = "auto";
    if(mediaQuery.matches){
      post.style.width = "600px";
    }
    else {
      post.style.width = "100%";
    }
    post.style.marginright = "auto";
    post.style.transform = "none";
    post.style.overflow = "hidden";
    intro.style.display = "flex";
    relations.style.display = "flex";
    
    for (let i = 0; i < post_all.length; i++) {
      post_all[i].style.display = "flex";
    }

    post.style.marginbottom = '30px';

    post.scrollIntoView({ behavior: "auto", block: 'center' })
  }
  render() {
    return <div className="post__container" id={post_info.post.main[this.props.name].id}>

      <div className="post__close">
        <input type="button" value="X" onClick={this.post_hidden} />
      </div>

      <div className="post__image" onClick={this.post_show}>
        <Photo name={this.props.name} />
      </div>
      <p className="post__date">{post_info.post.main[this.props.name].date}</p>
      <p className="post__hashtag">{post_info.post.main[this.props.name].hashtag}</p>
      <p className="post__desc" >{post_info.post.main[this.props.name].desc}</p>
    </div>
  }
}

export default Post;