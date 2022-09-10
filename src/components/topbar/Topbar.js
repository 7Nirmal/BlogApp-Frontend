import "./topbar.css";
import { Link,useNavigate} from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const user = true;
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
           {user ?  <li className="toplistitem">Logout</li>:""}
        </ul>
      </div>
      <div className="topRight">
        <img className="profile-image" src="https://images.unsplash.com/photo-1585267676185-f4aa56ddbce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80" 
        alt=""
        onClick ={()=>navigate("/user-profile")}
        />
<i className="searchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
