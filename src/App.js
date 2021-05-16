import React from 'react';
import './css/App.css';

class Logo extends React.Component {
  render() {
    return <p className="logo__desc">Instagram</p>
  }
}

class Menu extends React.Component {
  render(){
    return <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">Home</li>
        <li className="menu__item">Message</li>
        <li className="menu__item">Explore</li>
        <li className="menu__item">Favourite</li>
        <li className="menu__item">Profile</li>
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

class Image extends React.Component {
  render() {
    return <img className="gallery__image" src="*"></img>
  }
}





function App() {
  return (
  <div className="wrapper">
  <Menu />
  <div className="intro">
    <Logo/><Search />
  </div>
  
  <div className="banner">
    <p className="banner__intro">Hello in gallery!</p>
</div>
  <div className="gallery">
    <Image/><Image/><Image/>
  </div>

</div>
  );
}

export default App;
