import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'



function BookShelf (props)  {
    const {books, title} = props
	return (
     !books.length ?
        <div className="bookshelf">
         <p>Sorry, there are no books in the <b>{title} </b>Shelf</p>
        </div>
        :
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
                    onChangeBookShelf={props.onChangeBookShelf}

                    />
                </li>
                )
                
                )}
            </ol>
            
        </div>
    </div>
        
    )

};

export default BookShelf;