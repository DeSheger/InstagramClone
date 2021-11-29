import React from 'react';


class Menu extends React.Component {

  menuHandler = (e, name) => {
    e.preventDefault();
    this.props.active(name)
  }



  render() {
    return <nav className="menu" style={this.props.style}>
      <ul className="menu__list" style={this.props.listStyle}>
        <li className="menu__item"><p className="menu__link" onClick={(e) => this.menuHandler(e, "home")} href="">Home</p></li>
        <li className="menu__item"><p className="menu__link" onClick={(e) => this.menuHandler(e, "explore")} href="">Explore</p></li>
        <li className="menu__item"><p className="menu__link" onClick={(e) => this.menuHandler(e, "favourite")} href="">Favourite</p></li>
        <li className="menu__item"><p className="menu__link" onClick={(e) => this.menuHandler(e, "profile")} href="">Profile</p></li>
      </ul>
    </nav>
  }
}

export default Menu;