import React, {Component} from 'react'
import BookShelf from './BookShelf'




class BookList extends Component {

	render(){
        const books = this.props.books
		const changebk = this.props.onChangeBookShelf
        const currentlyReading = books.filter((book)=>book.shelf==="currentlyReading")
        const wantToRead = books.filter((book)=>book.shelf==="wantToRead")
        const read = books.filter((book)=> book.shelf === "read")
    	
    	return (
        	<div className="list-books-content">
            	<div className="list-books-title">
          			<h1>My Reads</h1>
          		</div>
          		<div className="list-books-content">
          			<div>
                      <BookShelf books={currentlyReading} onChangeBookShelf={changebk} title="Currently Reading"/>

                      <BookShelf books={wantToRead} onChangeBookShelf={changebk} title="Want To Read"/>

                      <BookShelf books={read} onChangeBookShelf={changebk} title="Read"/>
          			</div>
          		</div>

				<div className="open-search">
					<a href='/search'>
						<button></button>
					</a>
				</div>
            </div>
        );
    }

}

export default BookList;