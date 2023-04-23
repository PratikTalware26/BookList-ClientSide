import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate= useNavigate()

  const formSubmit=async (data)=>{
    // console.log(data)
    try {
        await axios.post("http://localhost:8081/api/user",data)
        alert("registered successfully")
        navigate("/")
    } catch (error) {
        // alert("registered successfully")
        console.log(error.message)
    }
  }

  return (
    <div className="reg-parent">
      <div className="reg-cont">
        <div className="reg-header">
          <h1>Register</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit((data)=>formSubmit(data))}>
            <div>
              <input
                type="text"
                placeholder="UserName"
                {...register("name", { required: true })}
              />
              {errors.name?.type==="required"?<small>This field is required</small>:""}
            </div>
            <div>
              <input type="password" placeholder="Password" {...register("password", {required:true})}/>
              {errors.password?.type==="required"?<small>This field is required</small>:""}
            </div>
            <div>
              <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="btn-cont">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
        <Link to="/">
          <p>Member Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
