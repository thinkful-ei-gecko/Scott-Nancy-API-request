import React from 'react';

import './App.css';
import Search from './search field/searchBar'
import Filter from './filter field/filterOptions'


class App extends React.Component {
  
  state = {
    searchResults: [],
    error: null,
    loading: false,
    filterPrint: '',
    filterBook: '',
    searchTerm: ''

  }

  handleSubmit = (e) => {
    console.log('button clicked')
    e.preventDefault();
    

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
      .then(res => {
        if(!res.ok){
          throw new Error('Something went wrong, please try again')
        }
        return res.json()
      })
      .then(data => {
        this.setState(
          {searchResults : data.items}
          )}
      )
  }

  handleChange = (e) => {
   
    this.setState({searchTerm: e.target.value}) 
    
  }

  render() {
    return (
      <div className="App">
        <header><h1>Google Book Search</h1></header>
        <Search 
          submit = {this.handleSubmit}
          updateSearch = {this.handleChange}
          state = {this.state}
        />
        <Filter />
      </div>
    );
    }
}

export default App;
