import "./topbar.css";
import { Link,useNavigate} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Authcontext";

export default function Topbar() {
  const {userdetails,dispatch} = useContext(Context);
  const navigate = useNavigate();
const handlelogout = () =>{
dispatch({type:"LOGOUT"})
navigate("/");
}
  return (
    <div className="topbar">
      <div className="topLeft">
      <i className="topicon fa-solid fa-film"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
            <li className="toplistitem">
              <Link to="/" className="link">Home</Link>
            </li>
            <li className="toplistitem">
            <Link to="/write" className="link">Write</Link>
            </li>
            <li className="toplistitem">Blogs</li>
            {userdetails ? <li className="toplistitem" onClick={handlelogout}>Logout</li> :  ""} 
        </ul>
      </div>
      <div className="topRight">
        {userdetails ?  <img className="profile-image" src={userdetails.photo} 
        alt=""
        onClick ={()=>navigate("/user-profile")}
        /> : (
          <li className="toplistitem" onClick ={()=>navigate("/login")}>LOGIN</li>
        )}
       
<i className="searchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
