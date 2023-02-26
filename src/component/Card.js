import React, { useState } from 'react'
import { books } from '../data';
import '../style/style.css'

function Card({book}) {
    const[showTrailer,setShowTrailer]=useState(false)
    return (
        <div className='cardHome'>
  <img src={book.imgurl} style={{width:'60vw',height:'30vw'}}></img>
  <div className='descripHome'><h6>{book.name}</h6>
      <p style={{}}>Rating: {book.rating} /5 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8bfb74111957539.600b408feb79c.gif" style={{width:'450px', height:'150px'}}></img></p>
      <p style={{}}>{book.description}</p>
      <button id='trailer' onClick={()=> setShowTrailer(true)}>Trailer</button>
      {showTrailer && <div className='show-trailer'> 
      <button id='close' onClick={()=>setShowTrailer(false)}>X</button>
      <iframe src={book.trailer}  id="video"  width="727" height="409"> </iframe></div>}
      </div>
     </div>
    )
}

export default Card;
