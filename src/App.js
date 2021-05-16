import React from 'react';
import './css/App.css';

let lorem="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";


class Logo extends React.Component {
  render() {
    return <p className="logo__desc">Instagram</p>
  }
}

class Menu extends React.Component {
  render(){
    return <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item"><a className="menu__link" href="*">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="*">Message</a></li>
        <li className="menu__item"><a className="menu__link" href="*">Explore</a></li>
        <li className="menu__item"><a className="menu__link" href="*">Favourite</a></li>
        <li className="menu__item"><a className="menu__link" href="*">Profile</a></li>
      </ul>
    </nav>
  }
}

class Search extends React.Component {
  render(){
    return <form action="*" className="search">
      <input type="text" className="search__text" value="Bloom"></input>
      <input type="button" className="search__button" value="Search"></input>
    </form>
  }
}



class Post extends React.Component {
  render() {
    return <div className="post__container">
      <div className="post__image" >
        <img className="post__img" src="https://cdn.pixabay.com/photo/2020/04/16/15/39/mountains-5051149_1280.jpg"></img>
      </div>
      <p className="post__desc">{lorem}</p>
    </div>
  }
}


//////////////////////////////////////////////////////
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
      <Post/><Post/><Post/>
      <Post/><Post/><Post/>
  
    </div>
    </div>
  }
}
///////////////////////////////////////////////////////
class Message extends React.Component {
  render() {
    return <div className="message">
    <Menu />
    <div className="intro">
      <Logo/><Search />
    </div>

    <div className="banner">
      <p className="banner__intro">Hello in gallery!</p>
    </div>
    <div className="post">
      <Post/><Post/><Post/>
      <Post/><Post/><Post/>
  
    </div>
    </div>
  }
}

function App() {
  return (
    <div className="wrapper">
      <Home/>
    </div>
  );
}

export default App;
