import React, {Component} from 'react'
import { Route } from 'react-router'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import { Switch } from 'react-router-dom'



class BooksApp extends Component {
state ={
    books: [],
  searchResult: []
};

  componentDidMount(){
      BooksAPI.getAll().then ( books => {
        this.setState({
            books: books
        })
    })
  }

  handleSearchQuery = (event) => {
        const { value } = event.target;
        BooksAPI.search(value).then(books => {
            return books ? this.setState({ searchResult: books }) : [];
        })
    }

  onChangeBookShelf = ((book,newShelf)=> {
    BooksAPI.update(book, newShelf).then(
      (response) => {
        let updatedBooks = this.state.books.filter(element => element.id !== book.id)
        if(newShelf !== 'none'){
          book.shelf = newShelf
          updatedBooks.push(book)
        } 
        this.setState({books: updatedBooks})

      }
    )
  })

  render(){
   const {books, searchResult} = this.state
      return (
        <div className="app">
      <Switch>
        <Route exact path="/" render={() => (
            <BookList 
              books={books}    
              onChangeBookShelf={this.onChangeBookShelf}
            />
          )}>
          </Route>

          <Route path="/search" render={() => (
          <SearchBooks 
            books={ books } 
            searchResult={searchResult } 
            handleSearchQuery={this.handleSearchQuery} 
            onChangeBookShelf={ this.onChangeBookShelf } 
          />)}>
          </Route>
      </Switch>





          </div>
    );
  }
};
export default BooksApp