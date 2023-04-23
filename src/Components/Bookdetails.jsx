import React, { useContext } from "react";
import "./Bookdetails.css";
import { globalData } from "../App";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Bookdetails = () => {
  // console.log(props.bookId);
  const [token]= useContext(globalData)
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
        <div>Book Info</div>
        <div>
          <Link to="/home">
          <button>Delete Book</button>
          </Link>
          <Link to="/editbook">
          <button>Edit Book</button>
          </Link>
        </div>
      </div>
    );
  }else{
    <Navigate to="/"/>
  }
};

export default Bookdetails;
