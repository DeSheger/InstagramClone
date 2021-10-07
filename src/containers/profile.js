import React from "react";

import Menu from "../components/menu";

class Profile extends React.Component {

    render() {
        return(
        <div className="profile">
            <Menu active={this.props.active}/>
        </div>)
    }
}

export default Profile