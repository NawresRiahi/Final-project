import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import UpdateBook from '../component/UpdateBook'
import '../style/style.css'
function Details() {
    const location=useLocation()
    const [showModal, setShowModal] = useState(false)

    const book=location.state
    const [showTrailer, setShowTrailer] = useState(false)
    return (
        <>
            <div>
                <img src={book.img} alt={book.name} style={{ width: '100%', height: '42vw' }} />
                <div className='details'>
                    <img src={book.posterurl} alt={book.name} style={{ height: '150px' }} />
                    <div className='descrip'><h1>{book.name}</h1>
                        <p style={{backgroundColor:"rgba(40, 44, 52, 0.8)" , width:"300px", borderBlockColor:"black"}}>Description: {book.description}</p>
                        <button id='trailer' onClick={() => setShowTrailer(true)}>Buy the Book </button>
                        <button id='trailer' onClick={() => setShowModal(true)}>update the Book </button>
                        {showTrailer && <div className='show-trailer'>
                            <button id='close' onClick={() => setShowTrailer(false)}>X</button>
                            <iframe src={book.trailer} id="video" width="727" height="409"> </iframe></div>}
                    </div>
                </div>
            </div>
            {showModal && <UpdateBook  setShowModal={setShowModal} book={book} />}
        </>
    )
}

export default Details
