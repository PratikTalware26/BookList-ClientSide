import React from "react";
import "./Editbook.css"
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useForm} from "react-hook-form"
import axios from "axios";

const Editbook = () => {
  const location= useLocation()
  const data= location.state.bookData
  const navigate= useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(data)

  const formSubmit=async (data)=>{
    // console.log(data)
    try {
      await axios.patch(`https://booklist-serverside.onrender.com/api/books/${localStorage.getItem('bookId')}`, data)
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="addbook-cont">
      <div className="show-btn-cont">
      <Link to="/home">
          <button>Show Book List</button>
          </Link>
      </div>
      <div className="addbook-header">
        <h1>Edit Book</h1>
        <p>Update Book's Info</p>
      </div>
      <div className="newbook-inp-cont">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label htmlFor="">
            Title Of Book
            <input type="text" placeholder="Title Of Book" defaultValue={data.title} {...register('title')}/>
            </label>
          </div>
          <div>
            <label htmlFor="">
            ISBN
            <input type="text" placeholder="ISBN" defaultValue={data.ISBN} {...register('ISBN')}/>
            </label>
          </div>
          <div>
            <label htmlFor="">
            Author
            <input type="text" placeholder="Author" defaultValue={data.author} {...register('author')}/>
            </label>
          </div>
          <div>
            <label htmlFor="">Describe this book</label>
            <input type="text" placeholder="Describe this book" defaultValue={data.description} {...register('description')}/>
          </div>
          <div>
            <label htmlFor="">Published_date</label>
            <input type="text" placeholder="Published_date" defaultValue={data.published_date} {...register('published_date')}/>
          </div>
          <div>
            <label htmlFor="">Publisher of this book</label>
            <input type="text" placeholder="Publisher of this book" defaultValue={data.publisher} {...register('publisher')}/>
          </div>
          <div className="addbook-submit-btn-cont">
            <button type="submit">Update Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editbook;
