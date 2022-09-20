import"./sidebar.css"
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Sidebar() {
  const[cats,setCats] = useState([]);
const getcats = async() =>{
  const res =await axios.get("/category");
  setCats(res.data);
  console.log(cats);
}
useEffect(()=>{getcats()},[]);
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="
          alt="pic"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">GENERES</span>
       
    {cats.map((c,i)=>
       <ul className="sidebarList" key ={i}>
      <li className="sidebarListItem">
      <Link className="link" to={`/?cat=${c.name}`}> {c.name}</Link>
                </li>
                </ul>
    )}
       
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
