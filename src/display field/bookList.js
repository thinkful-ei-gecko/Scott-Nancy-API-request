import React from 'react'
import Bookitem from './bookItem';

class Booklist extends React.Component{


    generateBooklist = () => {
        let bookArray = this.props.state.searchResults.map((book) => {
            return (
                <Bookitem 
                    img = {book.volumeInfo.imageLinks.thumbnail}
                    title = {book.volumeInfo.title}
                    author = {book.volumeInfo.authors[0]}
                    desc = {book.volumeInfo.description}
                    price = {book.saleInfo.retailPrice.amount}
                />
            )
        })
        return bookArray
    }

    render(){
        return (
        <section>
            <ul>
                {this.generateBooklist()}
            </ul>

        </section>
        )
    }
}

export default Booklist;