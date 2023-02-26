import React, { useState } from 'react'
import BookCard from '../component/BookCard'
import { books } from '../data'
import '../style/style.css'

function WatchList() {
    const [bookList,setBookList]=useState(books)
    return (
       <><h1 id='page'>Update</h1>
        <div className="cards">
  {bookList.map((book,i)=>  <BookCard x={book}/>  )}</div>
       </> 
    )
}

export default WatchList
