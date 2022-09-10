import "./blogpage.css";
import Singlepage from "../components/contentpage/Singlepage"
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Blogpage() {
  const user =true;
  const navigate = useNavigate();
  return (
    <div className="blog-page">
      {user ?(<>   <Singlepage/>
      <Sidebar/></>):(navigate("/login"))}
   
    </div>
  )
}
