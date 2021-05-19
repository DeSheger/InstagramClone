import React from 'react';

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

export default Menu;