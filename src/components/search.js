import React from 'react';

class Search extends React.Component {
    render(){
      return <form action="*" className="search">
        <input type="text" className="search__text" value="Bloom"></input>
        <input type="button" className="search__button" value="Search"></input>
      </form>
    }
}

export default Search;