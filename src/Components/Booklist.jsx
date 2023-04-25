import React, { useContext, useEffect, useState } from "react";
import "./Booklist.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { globalData } from "../App";
import axios from "axios";

const Booklist = () => {
  const [token]= useContext(globalData)
  const [books, setBooks]= useState([])

  const navigate= useNavigate()

  const fetchBooks= async()=>{
    try {
      const response= await axios.get("https://booklist-serverside.onrender.com/api/books")
      // console.log(response)
      setBooks(response.data.books)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchBooks()
  }, [])

  const handleBookClick=(id)=>{
    localStorage.setItem('bookId', id)
    navigate("/bookdetails")
    
  }
 
 

  if(token){
    return (
      <>
      <div className="booklist-cont">
        <div className="header-cont">
          <h1>Book List</h1>
        </div>
        <div className="booklist-btn-cont">
          <Link to="/addbook">
          <button>+ Add New book</button>
          </Link>
        </div>
        {books?<div className="bookscont-parent">
          {books.map((val, i)=>{
            return(
              <div className="books-cont" key={i} onClick={()=>handleBookClick(val._id)}>
              <div className="bookimg-cont"><img src="https://3.bp.blogspot.com/-QeKK2c_BEJ8/W5RNaB1e2LI/AAAAAAAADxA/fpeokLYVxBIhtjIRhu9HkViW1xhAMwfkwCLcBGAs/s1600/Castle%2BIn%2BThe%2BSky%2Bpre-made%2Bcover%2BPaperback.jpg" alt="bookphoto" /></div>
              <div className="desc-cont">
              <div>{val.title}</div>
              <div>{val.author}</div>
              <div><h3>{val.description}</h3></div>
              </div>
              </div>
            )
          })}
        </div>: <h1>Loading...</h1>}
      </div>
      </>
    );
  }else{
    return <Navigate to="/"/>
  }
};

export default Booklist;
