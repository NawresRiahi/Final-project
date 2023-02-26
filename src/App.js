import './App.css';
import BookList from './views/BookList';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import WatchList from './views/WatchList';
import Details from './views/Details';
import NavBar from './component/NavBar';

function App() {
 
const [text, setText]=useState("");
  return (<>
     <NavBar setText={setText}/>
     <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<BookList text={text}/>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
      <Route path='/book/:id' element={<Details/>}/>
      <Route path='*' element={<h1 id='not'>Not Found</h1>}/>
     </Routes>

    </>
  );
}

export default App;
