import React, { Component} from 'react';
import Book from './Book'


class BookShelf extends Component {
    render(){
      const {books, title,  onChangeBookShelf } = this.props;
        if(!books.length){
            return(
                <div className="bookshelf">
                    <p>Sorry, there are no books in the <b>{title} </b>Shelf</p>
                </div>
            );

        }
        else {
            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book,i) => (
                            <li key={book.id}>
                                <Book 
                                book={book} 
                                title={book.title} 
                                authors={book.authors} 
                                imageLink={book.imageLinks} 
                                onChangeBookShelf={onChangeBookShelf}
                                shelf={book.shelf}
                                />
                            </li>
                            )

                            )}
                        </ol>

                    </div>
                </div>
            );
        }
    }

};

export default BookShelf;