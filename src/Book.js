import React, { Component } from 'react'

class Book extends Component {
  
  render (){
    const {book,title, authors, imageLink, onChangeBookShelf,shelf} = this.props
  	return (
    	<div className="book">
            <div className="book-top">
      		 <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${imageLink && imageLink.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select
                                onChange={(event)=>onChangeBookShelf(book, event.target.value)}
                                value={shelf}
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title"> {title}</div>
                          <div className="book-authors"> {authors && authors.join(',')}</div>
                        </div>
    
    );
  }
  
}

export default Book;