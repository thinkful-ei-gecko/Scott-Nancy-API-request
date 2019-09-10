import React from 'react'
import Bookitem from './bookItem';

class Booklist extends React.Component {


    generateBooklist = () => {
        let bookArray = this.props.state.searchResults.map((book) => {
            return (
                <li key={book.id}>
                    <Bookitem
                        id={book.id}
                        img={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://picsum.photos/200'}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'nobody wrote this'}
                        desc={book.volumeInfo.description}
                        price={book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 'not for sale'}
                    />
                </li>
            )
        })
        return bookArray
    }

    render() {
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