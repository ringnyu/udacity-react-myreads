import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom';

function SearchBooks (props) {
    const{
        books,
        handleSearchQuery,
        onChangeBookShelf,
    	searchResult
    } = props;

    const getCurrentShelf = (shelf, currBookId) => {
        let res = null
        const currBook = books && books.find(book => book.id === currBookId);
        if (!shelf && currBook) {
          res = currBook.shelf;
        } else {
          res = shelf || 'none';
    }
        return res;
      }    

    const showSearchResults = () => {
        if(searchResult.length){
            return  searchResult.error ?
                        <div>No results found</div>

                    : searchResult.map((book,i) => {
                        return (
                            <li key={book.id}>
                                <Book 
                                    book={book} 
                                    title={book.title} 
                                    authors={book.authors} 
                                    imageLink={book.imageLinks} 
                                    onChangeBookShelf={ onChangeBookShelf }
                                    shelf={ getCurrentShelf(book.shelf, book.id) }
                                />
                            </li>
                        )
                    })
        }
    }

        return(
          <div className="search-books">

          <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>

                <div className="search-books-input-wrapper">
                  <input
                      type="text" 
                      className="search-books"
                      placeholder="Search by title or author"
                onChange={ event => handleSearchQuery(event) }
              />
              </div>
          </div>

              <div className="search-books-results">

                  <div>
                      <ol className="books-grid">
                          {showSearchResults()}
                      </ol>
                  </div>


            </div>

          </div>


        );
}

export default SearchBooks;