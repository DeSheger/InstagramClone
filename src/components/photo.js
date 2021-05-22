import React from 'react';

import post_info from '../sources/post_data/post';


class Photo extends React.Component {
    render() {
    return <div className="photo">
            <img className="photo__image" src={post_info.post.main[this.props.name].picture} alt="fail to load"></img>
        </div>

    }
}

export default Photo;