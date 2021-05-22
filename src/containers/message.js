import React from 'react';

import Menu from '../components/menu';

const style = {
  left:0,
  width:'100%'
}

class Message extends React.Component {
    render() {
      return <div className="message">
      MESSENGER
      <Menu style={style}/>
      </div>
    }
}

export default Message;