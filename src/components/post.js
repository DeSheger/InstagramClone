import React from 'react';

import post_info from '../sources/post_data/post';


class Post extends React.Component {
        

    post_show=()=> {

        const post=document.querySelectorAll('.post__container');
        const close=document.querySelectorAll('.post__close');
        let id=post_info.post.main[this.props.name].id;
      
        close[id].style.display="flex";

        post[id].style.position="fixed";
        post[id].style.top="0";
        post[id].style.left="0";
        post[id].style.height="auto";
        post[id].style.minheight="100vh";
        post[id].style.witdh="100vw";


    }
    post_hidden=()=>  {
        const post=document.querySelectorAll('.post__container');
        const close=document.querySelectorAll('.post__close');
        let id=post_info.post.main[this.props.name].id;

        
        close[id].style.display="none";

        post[id].style.position="static";
        post[id].style.top="auto";
        post[id].style.left="auto";
        post[id].style.height="100vh";
        post[id].style.witdh="100%";
    }
  render() {
      return <div className="post__container">
        
        <div className="post__close">
          <input type="button" value="x" onClick={this.post_hidden}/>
        </div>

        <div className="post__image" >
          <img className="post__img" onClick={this.post_show} src={post_info.post.main[this.props.name].picture} alt="fail"></img>
        </div>

        <p className="post__desc" >{post_info.post.main[this.props.name].desc}</p>
      </div>
    }
  }

export default Post;