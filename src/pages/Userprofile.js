import "./userprofile.css";
import Sidebar from "../components/sidebar/Sidebar";
import { useContext } from "react";
import { Context } from "../context/Authcontext";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function Userprofile() {

  const {userdetails} = useContext(Context);
  const[userdata,setUserdata] = useState({...userdetails});
  const[image,setImage] = useState(null);
  const PF = "http://localhost:8000/images/";

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserdata({...userdata, [name]:value});
  }

  const handlesubmit = async (e) =>{
    e.preventDefault();
    if(image){
      const data = new FormData();
      const filename = Date.now()+ image.name;
      data.append("name",filename);
      data.append("file",image);
      try{
        await axios.post("/upload",data);
      }
catch(err){
  console.log(err);
}
    }
console.log(userdata);
try{
  await axios.post(`/user/update/${userdetails._id}`,userdata).then((result)=>swal("update sucessfully"))
}
catch (err){
  console.log(err);
}
  } 
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handlesubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {image ?   <img
            src={URL.createObjectURL(image)}
            alt=""
          /> :   <img
          src={PF}
          alt=""
        /> }
         
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={(e)=>setImage(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input type="text" value={userdata.username} onChange={handlechange} name="username" />
          <label>Email</label>
          <input type="email" value={userdata.email} onChange={handlechange} name="email" />
          <label>Enter Password</label>
          <input type="password"  name="password" onChange={handlechange} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}