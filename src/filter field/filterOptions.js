import React from 'react'

class Filter extends React.Component{
    render(){
        return(
            <div>
                <select onChange={this.props.filterPrint}>
                    <option value=''>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <select onChange={this.props.filterBook}>
                    <option value=''>No Filter</option>
                    <option value='partial'>Partial</option>
                    <option value='full'>Full</option>
                    <option value='free-ebooks'>Free-Ebooks</option>
                    <option value='paid-ebooks'>Paid-Ebooks</option>
                    <option value='ebooks'>Ebooks</option>
                  </select>
            </div>
        )
        
        
    }

}

export default Filter;