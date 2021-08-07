import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
	state = {
		books: [],
		query: ' '
	}

	handleSearchQuery(query){
		BooksAPI.search(query).then(books => 

			books ? this.setState({books}) : [])

			this.setState({query})
	}	
	
	showSearchResults(){
		const {books, query} = this.state;

		if(query){
			return  books.error ?
						<div>No results found</div>

					: books.map((book,i) => {
						return (
							<li key={book.id}>
										<Book 
										book={book} 
										title={book.title} 
										authors={book.authors} 
										imageLink={book.imageLinks} 
										onChangeBookShelf={this.onChangeBookShelf}
										/>
							</li>
						)
					})
		}
	}

	onChangeBookShelf = ((book,newShelf)=> {
        BooksAPI.update(book, newShelf).then(
          (response) => {
            console.log("The response", response)
            book.shelf = newShelf
            
           let updatedBooks = this.state.books.filter(response.id !== book.id)
            updatedBooks.push(book)
           console.log(updatedBooks)

            this.setState({books: updatedBooks})
    
    
          }
        )
      })
	render (){
		const {query} = this.state
		
    	return(
          <div className="search-books">

          <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          
          	  <div className="search-books-input-wrapper">
          		<input
          			type="text" 
          			className="search-books"
          			placeholder="Search by title or author"
          			value={query}
  					onChange={e => this.handleSearchQuery(e.target.value)}/>
          	</div>
          </div>
		  
  			<div className="search-books-results">
			  
				  <div>
					  <ol className="books-grid">
					  	{this.showSearchResults()}
					  </ol>
				  </div>
			  
              
            </div>

  		</div>

        
        );
    }

}

export default SearchBooks;


