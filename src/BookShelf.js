import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class BookShelf extends Component {

    state ={
        books: [],
    };

    onChangeBookShelf = ((book,newShelf)=> {
        BooksAPI.update(book, newShelf).then(
          (response) => {
            console.log("The response", response)
            book.shelf = newShelf
            
           let updatedBooks = this.state.books.filter(response.id !== book.id)
           console.log(updatedBooks) 
           updatedBooks.push(book)
           

            this.setState({books: updatedBooks})
    
    
          }
        )
      })

	render(){
      const {books, title} = this.props


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
                                <Book book={book} title={book.title} authors={book.authors} imageLink={book.imageLinks} onChangeBookShelf={this.onChangeBookShelf}/>
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