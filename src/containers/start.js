import React from 'react';

import Login from '../components/login';

class Start extends React.Component {

    render() {
        const {active} = this.props
        return (
            <div className="start">
                <Login active={active}/>
            </div>
        );
    }
}

export default Start;