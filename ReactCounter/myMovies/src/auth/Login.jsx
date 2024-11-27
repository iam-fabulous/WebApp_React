import React, {useState} from "react";
import {Link} from "react-router-dom";
import CustomButton from "../reuseables/CustomButton";
import style from "../styles/login.module.css";

const Login = () => {
  const userLoginDetails = {
    email: "",
    password: "",
  };

  const [data, setData] = useState(userLoginDetails);

  return (
    <>
      <form action="">
        <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="input"
          //onChange={handleChange}
          required
        />
        </div>
        <div>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input"
          //onChange={handleChange}
          required
        />
        </div>
        <CustomButton style={style.btn} type="submit" textContent="Login"/>
      </form>
        <div>
        <span>I don't have an account?</span>
        <span><Link to = {'/SignUp'}>SignUp</Link></span>
        </div>
    </>
  );
};

    export default Login;
