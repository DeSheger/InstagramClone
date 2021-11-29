import React from "react";

import Menu from "../components/menu";
import Photo from "../components/photo";


const style = {
    left: 0,
    width: '100%'
}

class Favourite extends React.Component {

    galleryHandler = (favouritePosts) => {
        let posts = [];
        for (const post of favouritePosts) {
            posts.push(<div className="favourite__post"><Photo name={post} /></div>)
        }
        return posts;
    }

    render() {
        const { active, user } = this.props
        
        return (
            <div className="favourite">
                <Menu style={style} active={active} />

                <div className="favourite__main">
                    <div className="favourite__container">
                        <div className="favourite__gallery">
                            {this.galleryHandler(user.favourite)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Favourite