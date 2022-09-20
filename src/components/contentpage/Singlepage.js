import "./singlepage.css";
import { Link, useParams,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Context } from "../../context/Authcontext";
import swal from 'sweetalert';

export default function Singlepage() {
  const {id} = useParams();
  const navigate = useNavigate();
  const[post,setPost] = useState([]);
  const {userdetails} = useContext(Context);

  const [title,setTitle] = useState("");
  const[desc,setDesc] = useState("");
  const[image,setImage] = useState(null);
  const[file,setFile] = useState("");
  const[update,setUpdate] = useState(false);
console.log(post);

const getpost =async () =>{
  const res = await axios.get(`/posts/${id}`)
  setPost(res.data);
  setTitle(res.data.title);
  setDesc(res.data.desc);
}

const PF = "http://localhost:8000/images/";

useEffect(()=>{getpost()},[])

const handledelete = async (id) =>{
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this job!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Your post has been deleted!", {
        icon: "success",
      });
      fetch(`/posts/delete/${id}`, {method:"DELETE"})
      .then((data) => data.json()).then(()=>navigate("/"))
    } else {
      swal("your file will not be deleted");
    }
  });

}

const handleupdate = async() =>{
  if(image) {
    const data = new FormData();
    const filename = Date.now() + image.name+ ".jpg";
    setFile(filename);
    data.append("name",filename);
    data.append("file",image);
    try{
await axios.post("/upload",data);
    }
    catch (err){
console.warn(err);
    }
}
try{
  const res = await axios.put(`/posts/edit-post/${id}`,{
    username:userdetails.username,title,desc,photo:file
  }).then(()=>{swal("Your post has been updated");setUpdate(false)})
}
catch(err){
  console.log(err);
}

}
console.log(file);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {update ? (
          <div className="update-image">
        {image ? <img className="singlePostupdateimage" src={URL.createObjectURL(image)} alt="" />
        : 
        <img className="singlePostupdateimage" src={PF + post.photo} alt="" />
        }  
                         <input type="file" onChange = {(e)=>setImage(e.target.files[0])}/>

          </div>
        ) :(
                    <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
       

        {update ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="singlePostTitleinput"
            autoFocus
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {userdetails.username === post.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => {
                    setUpdate(true);
                  }}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={() => {
                    handledelete(id);
                  }}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?username=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {update ? (
          <textarea
            className="updatedesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">
            {desc}
            <br />
            <br />
          </p>
        )}
      </div>
      {update && (
        <div className="buttons-updatepage">
          <button className="updatebutton" onClick={handleupdate}>
            Update
          </button>
          <button
            className="deletebutton"
            onClick={() => {
              window.location.reload();
            }}
          >
            Discard
          </button>
        </div>
      )}
    </div>
  );
}
