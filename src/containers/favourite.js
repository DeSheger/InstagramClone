import React from "react";

import Menu from "../components/menu";

const style = {
    left: 0,
    width: '100%'
  }

class Favourite extends React.Component {


    render() {
        const {active} = this.props
        return(
            <div className="favourite">
                <Menu style={style} active={active}/>

                <div className="favourite__main">
                    <div className="favourite__container">
                        hello world
                    </div>
                </div>
            </div>
        )
    }
}

export default Favourite