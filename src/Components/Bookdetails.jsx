import React, { useContext, useEffect, useState } from "react";
import "./Bookdetails.css";
import { globalData } from "../App";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Bookdetails = () => {
  const [token]= useContext(globalData)
  const [bookData, setBookData]= useState({})
  const navigate= useNavigate()
  // console.log(localStorage.getItem('bookId'))

  const fetchData=async ()=>{
    const book= await axios.get(`https://booklist-serverside.onrender.com/api/books/${localStorage.getItem('bookId')}`)
    // console.log(book.data.book)
    setBookData(book.data.book)
  }

  useEffect(()=>{
    fetchData()
  },[])

  const handleDelete=async ()=>{
    try {
      await axios.delete(`https://booklist-serverside.onrender.com/api/books/${localStorage.getItem('bookId')}`)
      navigate("/home")
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleEdit=()=>{
    try {
      navigate("/editbook", { state: { bookData } });
    } catch (error) {
      console.log(error.message)
    }
  }

  if(token){
    return (
      <div className="bookdetails-cont">
        <div className="show-btn-cont">
          <Link to="/home">
          <button>Show Book List</button>
          </Link>
        </div>
        <div className="addbook-header">
          <h1>Book's Record</h1>
          <p>View Books Info</p>
        </div>
        <div className="bookdetails-table-cont">
          <table>
            <tbody>
            <tr>
              <td>1</td>
              <td>Title</td>
              <td>{bookData.title}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Author</td>
              <td>{bookData.author}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>ISBN</td>
              <td>{bookData.ISBN}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Publisher</td>
              <td>{bookData.publisher}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Published Date</td>
              <td>{bookData.published_date}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Description</td>
              <td>{bookData.description}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={handleDelete}>Delete Book</button>
          <button onClick={handleEdit}>Edit Book</button>
        </div>
      </div>
    );
  }else{
    return <Navigate to="/"/>
  }
};

export default Bookdetails;
