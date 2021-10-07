import React from 'react';

import Login from '../components/login';

class Start extends React.Component {

    render() {
        const {active, activeSession} = this.props
        return (
            <div className="start">
                <Login active={active} activeSession={activeSession}/>
            </div>
        );
    }
}

export default Start;