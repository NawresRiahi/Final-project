import React, { useState } from 'react'
import { books} from '../data'
import Card from '../component/Card'
import WatchList from './WatchList'
import '../style/style.css'
function Home() {
    const [bookList,setBookList]=useState(books)
    return (<>
    
    <h1 id='page'> Home</h1>
  
      <div className='presentation'> One web page for every book ever published. It's a lofty but achievable goal.

To build Open Library, we need hundreds of millions of book records, a wiki interface, and lots of people who are willing to contribute their time and effort to building the site.

To date, we have gathered over 20 million records from a variety of large catalogs as well as single contributions, with more on the way.

Open Library is an open project: the software is open, the data are open, the documentation is open, and we welcome your contribution. Whether you fix a typo, add a book, or write a widget--it's all welcome. We have a small team of fantastic programmers who have accomplished a lot, but we can't do it alone!
 </div>
  </>
  )
}

export default Home
