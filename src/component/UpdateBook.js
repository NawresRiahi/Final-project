import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBook } from '../redux/bookSlice/bookSlice';
import '../style/style.css'
const UpdateBook = ({ setShowModal,book }) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [newBook, setNewBook] = useState(book)
    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value })
        e.preventDefault();
    }
    return (<div className="add">
        <button id='close' onClick={() => setShowModal(false)}>close</button>
        <h1>Add Bookk</h1>
        <div className='form'>
            <input defaultValue={book.title} onChange={handleChange} type="text" name="title" placeholder='Book Name' />
            <input defaultValue={book.img} onChange={handleChange} type="text" name="img" placeholder='Poster URL' />
            <input defaultValue={book.rate} onChange={handleChange} type="Number" max={5} min={0} name="rating" style={{ width: '400px' }} placeholder='Rating' />
            <input defaultValue={book.description} onChange={handleChange} type="text" name="description" placeholder='Description...' />
            <button onClick={() => {dispatch(updateBook(newBook)); setShowModal(false); navigate("/books")  }}>Update</button>
        </div>
    </div>);
}

export default UpdateBook;