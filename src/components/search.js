import React from 'react';

class Search extends React.Component {
  state = {
    searchValue: '',
    input: document.querySelector('.search__text')
  }

  textHandler = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  searchHandler = (e) => {
    e.preventDefault();
    let posts = document.querySelectorAll('.post__hashtag');

    if(this.state.searchValue !== '')
    posts.forEach((value, index) => {
      if (value.textContent.search(this.state.searchValue) !== -1) {
        value.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    });
  }


  render() {  
    return <form className="search" onSubmit={this.searchHandler}>
      <input type="text" className="search__text" value={this.searchValue} 
      onChange={this.textHandler} placeholder="Search by hashtag ..."></input>
      <input type="button" className="search__button" value="Search" onClick={this.searchHandler}></input>
    </form>
  }
}

export default Search;