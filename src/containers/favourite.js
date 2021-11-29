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

class Favourite extends React.Component {

    galleryHandler = (favouritePosts) => {
        let posts = [];
        console.log(favouritePosts)
        for (const post of favouritePosts) {
            posts.push(<div className="favourite__post"><Photo name={post} /></div>)
        }
        return posts;
    }

    render() {
        const { active, user } = this.props
        
        return (
            <div className="favourite">
                <Menu style={style} listStyle={window.matchMedia('(max-width: 640)').matches?listStyle:null} active={active} />

                <div className="favourite__main">
                    <div className="favourite__container">
                        
                            {this.galleryHandler(user.favourite)}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Favourite