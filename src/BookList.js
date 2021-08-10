import React, {Component} from 'react'
import BookShelf from './BookShelf'




class BookList extends Component {

    render(){
        const { books, onChangeBookShelf } = this.props;
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
                      <BookShelf books={currentlyReading} title="Currently Reading" onChangeBookShelf={ onChangeBookShelf }/>

                      <BookShelf books={wantToRead} title="Want To Read" onChangeBookShelf={ onChangeBookShelf }/>

                      <BookShelf books={read} title="Read" onChangeBookShelf={ onChangeBookShelf }/>
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