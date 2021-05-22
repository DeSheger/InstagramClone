import React from 'react';

import Menu from '../components/menu';
import Logo from '../components/logo';
import Search from '../components/search';
import Post from '../components/post';
import post_info from '../sources/post_data/post';

console.log(post_info.post.main.length)



class Home extends React.Component {

    post_render = () => {
      let p=[];


      for(let i=0;i<post_info.post.main.length;i++) {
        p.push(<Post name={i}/>);
      }

      console.log(p);
      return p;
    };


    render() {
      return <div className="home">
      
      <div className="intro">
        <Logo/><Search /><Menu />
      </div>
  
      <div className="banner">
        <p className="banner__intro">Welcome in gallery!</p>
      </div>
      <div className="post">
        
       {this.post_render()}
        
      </div>
      </div>
    }
}

export default Home;