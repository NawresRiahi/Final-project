import BookCard from "../component/BookCard";
import '../style/style.css';
import { useState } from "react";
import AddBook from "../component/AddBook";
import { useSelector } from "react-redux";


const BookList = ({ text }) => {

  const [showModal, setShowModal] = useState(false)
  const bookList = useSelector(store => store.book)

  return (<>
    <h1 id='page'></h1>
    <div className="cards">
      {bookList.filter((book) => book.title.toUpperCase().includes(text.toUpperCase())).map((book,i) => (<BookCard key={i} x={book} />
      ))}
      <button id="addBtn" onClick={() => setShowModal(true)}>
        <img src="https://www.shareicon.net/data/256x256/2016/06/27/623443_book_256x256.png" style={{ width: '100%' }}></img>

      </button>
      {showModal && <AddBook bookList={bookList} setShowModal={setShowModal} />}

    </div></>);
}

export default BookList;
