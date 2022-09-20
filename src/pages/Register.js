import "./register.css";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

export default function Register() {
  const[register,setRegister] = useState({username:"",email:"",password:""})

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handlechange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setRegister ({
      ...register,[name]:value
    })
  }

  const handleregister = async(e) => {
e.preventDefault();
console.log(register);
const res = await axios.post("/user/register",register)
swal(res.data.message);
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleregister}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          name="username"
          onChange={handlechange}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          name="email"
          onChange={handlechange}

        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          name="password"
          onChange={handlechange}

        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
