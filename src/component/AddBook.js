import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice/bookSlice';
import '../style/style.css'
const AddBook = ({ setShowModal, setBookList, bookList }) => {
    const dispatch=useDispatch()
    const [newBook, setNewBook] = useState({})
    const handleChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value })
        e.preventDefault();
    }
    return (<div className="add">
        <button id='close' onClick={() => setShowModal(false)}>close</button>
        <h1>Add Bookk</h1>
        <div className='form'>
            <input onChange={handleChange} type="text" name="title" placeholder='Book Name' />
            <input onChange={handleChange} type="text" name="img" placeholder='Poster URL' />
            <input onChange={handleChange} type="Number" max={5} min={0} name="rating" style={{ width: '400px' }} placeholder='Rating' />
            <input onChange={handleChange} type="text" name="description" placeholder='Description...' />
            <button onClick={() => {dispatch(addBook(newBook)); setShowModal(false) }}>ADD</button>
        </div>
    </div>);
}

export default AddBook;