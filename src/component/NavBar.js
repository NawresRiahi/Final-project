import { Link } from 'react-router-dom'
import '../style/style.css'
function NavBar({ setText }) {
  return (
    <nav>
      <Link to={'/'} style={{ textDecoration: 'none' }}> <h1>Time To Read</h1></Link>
      <div id='list'>
      <img id="HomeLogo" src="home.png" alt=""></img>
        <Link to={'/'} id='comp'> Home </Link>
        <img id="HomeLogo" src="book.png" alt=""></img>
        <Link to={'/books'} id='comp'>Books</Link>
        <img id="HomeLogo" src="update.jpg" alt=""></img>
        <Link to={'/watchlist'} id='comp'>update</Link>
      </div>
      <form id='search'>
        <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Search..." />
      </form>
    </nav>
  );
}
 
export default NavBar;