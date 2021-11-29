import React from "react";

import Menu from "../components/menu";
import Photo from "../components/photo";

const style = {
    left: 0,
    width: '100%'
  }

  const listStyle = {
    flexBasis: '50%'
  }

class Info extends React.Component{
    logoutHandler = (e) => {
        e.preventDefault();
        document.cookie = "user"+ "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.location.reload();
    }

    render(){
        const {user} = this.props
        return (
        <div className="profile__main">
                <div className="profile__container">
                    <div className="profile__info">
                            <img src={user.image} className="profile__image" alt="error"/>
                            <div className="profile__name-container">
                                <div className="profile__name"><h1 className="profile__text">{user.login}</h1></div>
                                <p className="profile__desc">{user.desc}</p>
                            </div> 
                            
                    </div>
                        <button className="profile__logout" onClick={this.logoutHandler}>Log Out</button>
                    <div className="profile__gallery">
                        {user.posts.map((val)=><div className="profile__post"><Photo name={val}/></div>)}
                    </div>
                </div>
            </div>
        )}
    
}

class Profile extends React.Component {
    
    render() {
        console.log(window.matchMedia('(min-width: 640)').matches)   
        const {user} = this.props;
        return(
        <div className="profile">
            <Menu active={this.props.active} style={style} listStyle={window.matchMedia('(min-width: 640)').matches?listStyle:null}/>
            <Info user={user}/>
        </div>)
    }
}

export default Profile