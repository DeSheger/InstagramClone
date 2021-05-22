import React from 'react';

class Menu extends React.Component {
  
    display_home=()=>{
      document.querySelector(".home").style.display="flex";
      document.querySelector(".message").style.display="none";
      document.querySelector(".explore").style.display="none";
    }
    display_message=()=>{
      document.querySelector(".home").style.display="none";
      document.querySelector(".message").style.display="flex";
      document.querySelector(".explore").style.display="none";

      
      
    }
    display_explore=()=>{
      document.querySelector(".home").style.display="none";
      document.querySelector(".message").style.display="none";
      document.querySelector(".explore").style.display="flex";

     
    }
    display_favourite=()=>{
      
    }



    render(){ 
      return <nav className="menu" style={this.props.style}>
        <ul className="menu__list">
          <li className="menu__item"><p className="menu__link" onClick={this.display_home} href="">Home</p></li>
          <li className="menu__item"><p className="menu__link" onClick={this.display_message} href="">Message</p></li>
          <li className="menu__item"><p className="menu__link" onClick={this.display_explore} >Explore</p></li>
          <li className="menu__item"><a className="menu__link" onClick="" href="*">Favourite</a></li>
          <li className="menu__item"><a className="menu__link" onClick="" href="*">Profile</a></li>
        </ul>
      </nav>
    }
}

export default Menu;