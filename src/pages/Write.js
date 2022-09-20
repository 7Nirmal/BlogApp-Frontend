import { useContext, useState } from "react";
import "./write.css";
import { Context } from "../context/Authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Write(){
    const [image,setImage] = useState(null);
    const{userdetails} = useContext(Context);
    const navigate = useNavigate(); 
    
const [textdata,setTextdata] = useState({title:"",desc:"",username:userdetails.username,photo:""});

const handlechange = (e) => {
    const name = e.target.name;
    const value =e.target.value;
    setTextdata({...textdata,[name]:value})
} 
  
const handlesubmit = async (e) => {
    e.preventDefault();

if(image) {
    const data = new FormData();
    const filename = Date.now() + image.name+ ".jpg";
   setTextdata(textdata.photo = filename);
    data.append("name",filename);
    data.append("file",image);
    console.log(textdata)
    try{
await axios.post("/upload",data);
    }
    catch (err){
console.warn(err);
    }
}

try{
  const res= await axios.post("/posts/new-post",textdata);
  console.log(res.data);
  navigate(`/blogpage/${res.data._id}`)
}
catch(err){
    console.warn(err);
}

}

    return(
        <div className="write">
      {image && 
      (
        <img
        className="writeImg"
        src={URL.createObjectURL(image)}
        alt="blog-images"
      />
      )}
      <form className="writeForm" onSubmit={handlesubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e)=>{setImage(e.target.files[0])}}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={handlechange}        
            name="title"
             />
        
             <button className="writeSubmit" type="submit">
          Publish
        </button>
       
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={handlechange}        
            name="desc"
          />
        </div>
     
      </form>
    </div>
    )
}