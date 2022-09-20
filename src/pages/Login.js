import "./login.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../context/Authcontext";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const[user,setUser] = useState({username:"",password:""});
    const {userdetails,isfetching,token,error,dispatch} = useContext(Context);

    const handlechange =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,[name]:value
    })
    }

    const handlelogin = async (e) =>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"})
      try{
        const res = await axios.post("user/login",user);
        dispatch({type:"LOGIN",payload:res.data})
        navigate("/")
      }
    catch (err) {
      dispatch({type:"LOGIN_ERROR",payload:err})
    }
    }
    console.log(user);
    console.log(userdetails);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handlelogin}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..."  name="username" onChange={handlechange}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." name="password" onChange={handlechange}/>
        <button className="loginButton" type="submit">Login</button>
      </form>
      <div className="buttons">
        <button className="loginRegisterButton" onClick={()=>navigate("/register")}>Register</button>
        </div>
    </div>
  );
}