
import React, {useState} from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () =>{

    const userDetails = {
        name: "",
        email: "",
        password: "",
    };

    return(
        <>
            <form action="">
            <div>
                <input
                 type="text"
                 name="username"
                 placeholder="Enter Username"
                 className={style.input}
                 //onChange={handleChange}
                 required
        />
            </div>
            <div>
                <input
                 type="email"
                 name="email"
                 placeholder="Enter your Email"
                 className="input"
                 //onChange={handleChange}
                 required
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="input"
          //onChange={handleChange}
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
    )
};

export default SignUp;