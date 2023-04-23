import React, { useContext } from "react";
import "./Addbook.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { globalData } from "../App";

const Addbook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token]= useContext(globalData)
  const navigate= useNavigate()

  const formSubmit = async (data) => {
   
    try {
      // console.log(data)
      await axios.post("http://localhost:8081/api/books", data);
      navigate("/home")
    } catch (error) {
      console.log(error.message);
    }
  };

  if(token || localStorage.getItem('userToken')){
    return (
      <div className="addbook-cont">
        <div className="show-btn-cont">
          <Link to="/home">
          <button>Show Book List</button>
          </Link>
        </div>
        <div className="addbook-header">
          <h1>Add Book</h1>
          <p>create new book</p>
        </div>
        <div className="newbook-inp-cont">
          <form onSubmit={handleSubmit(formSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Title Of Book"
                {...register("title")}
              />
            </div>
            <div>
              <input type="text" placeholder="ISBN" {...register("ISBN")} />
            </div>
            <div>
              <input type="text" placeholder="Author" {...register("author")} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Describe this book"
                {...register("description")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Published_date"
                {...register("published_date")}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Publisher of this book"
                {...register("publisher")}
              />
            </div>
            <div className="addbook-submit-btn-cont">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }else{
    <Navigate to="/"/>
  }
};

export default Addbook;
