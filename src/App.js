import React, {Component} from 'react'
import { Route } from 'react-router'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import {books} from './books'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import { Switch } from 'react-router-dom'



class BooksApp extends Component {
state ={
	books: [],
};
  
  componentDidMount(){
  	BooksAPI.getAll().then ( books => {
      console.log(books)
    	this.setState({
        	books: books
        })
    })
  }
 
  

  onChangeBookShelf = ((book,newShelf)=> {
    BooksAPI.update(book, newShelf).then(
      (response) => {
        console.log("The response", response)

        let updatedBooks = this.state.books.filter(response.id !== book.id)
        if(newShelf !== 'none'){
          book.shelf = newShelf
          updatedBooks.push(book)
        } 
        this.setState({books: updatedBooks})

      }
    )
  })
  
  render(){
   const {books} = this.state
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

          <Route path="/search" render={() => (<SearchBooks />)}>
          </Route>
      </Switch>
        

        
        
  			
 		 </div>
    );
  }
};
export default BooksApp
