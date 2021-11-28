import React from 'react';

class Search extends React.Component {
    state = {
      searchValue: ''
    }

    textHandler = (e) => {
      this.setState({
        searchValue: e.target.value
      })
    }

    searchHandler = () => {
      let posts = document.querySelectorAll('.post__hashtag');

      
      posts.forEach((value , index) => {
        if(value.textContent.search(this.state.searchValue) !== -1){
          value.scrollIntoView({behavior:'smooth', block:'center'})
        }
      });
    }

    render(){
      return <form action="*" className="search">
        <input type="text" className="search__text" value={this.searchValue} onChange={this.textHandler} placeholder="Search by hashtag ..."></input>
        <input type="button" className="search__button" value="Search" onClick={this.searchHandler}></input>
      </form>
    }
}

export default Search;