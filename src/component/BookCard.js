import React from "react";
import { Link } from "react-router-dom";
import '../style/style.css'

const BookCard = ({x}) => {
  return (
    <Link to={`/book/${x.id}`} state={x} style={{textDecoration: 'none'}} id='linkCard' >
    <div id="card">
      <img src={x.img} alt={x.name} style={{width:'100%',height:'190px'}}/>
      <h5 style={{textAlign:'center'}}>{x.title }</h5>
      <p  style={{textAlign:'center'}}>Rating: <br></br> {x.rate}%</p>
      <p> <img src="https://cdn.dribbble.com/users/1209774/screenshots/6412492/star.gif" style={{width:'150px', height:'50px', textAlign:'center'}}></img></p>
    </div></Link>
  );
};

export default BookCard;
