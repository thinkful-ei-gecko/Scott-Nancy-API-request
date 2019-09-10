import React from 'react'


class Search extends React.Component{

render(){
    console.log(this.props)
    return (
        <form onSubmit = {this.props.submit}>
            <label htmlFor='searchField' name='searchField'>Search:
                <input value={this.props.state.searchTerm} onChange={this.props.updateSearch}/>
             </label>
            <button type="submit" >Search</button>
        </form>
    )
}

}

export default Search;