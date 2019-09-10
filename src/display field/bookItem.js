import React from 'react'

class Bookitem extends React.Component {



    render() {
        return (
            <>
                <img src={this.props.img} alt='book cover' />
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.price}</p>
                <p>{this.props.desc}</p>
            </>

        )
    }
}

export default Bookitem;