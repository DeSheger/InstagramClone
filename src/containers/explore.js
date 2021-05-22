import React from 'react';

import Menu from '../components/menu';
import Photo from '../components/photo';

const style = {
      left:0,
      width:'100%'
    }

class Explore extends React.Component {
    

    render() { 
        
      return <div className="explore">
        <Menu style={style}/>
        <div className="explore__main">
        <div className="explore__container">
          <Photo name='0'/>
          <Photo name='1'/>
          <Photo name='2'/>
          <Photo name='3'/>
        </div>
        <div className="explore__container">
          <Photo name='3'/>
          <Photo name='4'/>
          <Photo name='5'/>
          <Photo name='0'/>
        </div>
        <div className="explore__container">
          <Photo name='3'/>
          <Photo name='4'/>
          <Photo name='5'/>
          <Photo name='1'/>
        </div>
        <div className="explore__container">
          <Photo name='3'/>
          
        </div>
      </div>
      </div>
    }
}

export default Explore;