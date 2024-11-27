import React, { useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();// this is like creating an instance of the useNavigate function. it is used to navigate from one page to another.

    const userDetails = {
        username: "",
        email: "",
        password: "",
    }; // Cannot be mutated directly, needs a function to input its values

    const [data, setData] = useState(userDetails)// takes the content of UserDetails as an object and gives to a function to be mutated

  function handleChange(event) {
    const {name, value} = event.target
    //setData((prevData) => ({...prevData, [name]:value}))
    setData((prevData)=>{
      return {...prevData, [name]:value}
    })
  } // this is the function that takes the object gotten from the useState function and inputs the value from the browser

  const handleSubmit = () =>{
    console.log("Submitted ......");
    //setTimeout(()=>{
      navigate('/login');
   // }, 8000)
  }

  console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          className={style.input}
          onChange={handleChange}
          required
        />
        </div>
        <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="input"
          onChange={handleChange}
          required
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="input"
          onChange={handleChange}
          required
        />
        </div>
        <CustomButton style={style.btn} type="submit" textContent="submit"/>
      </form>
      <div>
        <span>Already have an account?</span>
        <span><Link to = {'/login'}>Login</Link></span>
      </div>
    </>
  );
};

export default SignUp;
