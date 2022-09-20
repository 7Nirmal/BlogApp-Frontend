import "./blogpage.css";
import Singlepage from "../components/contentpage/Singlepage"
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Authcontext";
import { useContext } from "react";

export default function Blogpage() {
  const {userdetails} = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="blog-page">
      {userdetails.username ?(<>   <Singlepage/>
      <Sidebar/></>):(navigate("/login"))}
   
    </div>
  )
}
