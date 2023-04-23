import React, { useContext } from "react";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { globalData } from "../App";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate()

  const [token, setToken]= useContext(globalData)

  const formSubmit=async (data)=>{
   try {
     // console.log(data)
     let memberData= await axios.post("https://booklist-serverside.onrender.com/api/login", data)
     // console.log(memberData)
     setToken(memberData.data.token)
     localStorage.setItem('userToken', token)
     navigate("/home")
     // console.log(token)
   } catch (error) {
    console.log(error.message)
    alert("Please input valid credentials or register")
   }
  }

  return (
    <div className="reg-parent">
      <div className="reg-cont">
        <div className="reg-header">
          <h1>Member Login</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div>
              <input type="text" placeholder="UserName" {...register("name", {required:true})} />
              {errors.name?.type==="required"?<small>This field is required</small>:""}
            </div>
            <div>
              <input type="text" placeholder="Password" {...register("password", {required:true})}/>
              {errors.password?.type==="required"?<small>This field is required</small>:""}
            </div>
            <div className="btn-cont">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
        <Link to="/register">
          <p>register</p>
        </Link>
        <p>Forgot Password ?</p>
      </div>
    </div>
  );
};

export default SignIn;
