import React from "react";
import "./Editbook.css"
import { Link } from "react-router-dom";

const Editbook = () => {
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
        <form action="">
          <div>
            <label htmlFor="">
            Title Of Book
            <input type="text" placeholder="Title Of Book" />
            </label>
          </div>
          <div>
            <label htmlFor="">
            ISBN
            <input type="text" placeholder="ISBN" />
            </label>
          </div>
          <div>
            <label htmlFor="">
            Author
            <input type="text" placeholder="Author" />
            </label>
          </div>
          <div>
            <label htmlFor="">Describe this book</label>
            <input type="text" placeholder="Describe this book" />
          </div>
          <div>
            <label htmlFor="">Published_date</label>
            <input type="text" placeholder="Published_date" />
          </div>
          <div>
            <label htmlFor="">Publisher of this book</label>
            <input type="text" placeholder="Publisher of this book" />
          </div>
          <div className="addbook-submit-btn-cont">
            <button>Update Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editbook;
