import "./post.css";
import {Link} from "react-router-dom";
export default function Post({post}){

  const PF ="http://localhost:8000/images/"

return(
    <div>
    <div className="post">
{post.photo ? (
      <img
      className="postImg"
      src={PF + post.photo}
      alt=""
    />
) :(<img 
  className="postImg"
  src="https://archive.org/download/no-photo-available/no-photo-available.png"
  alt="not-available"
  />)}
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">
         {post.categories.map((cat,index)=>{
          <>
           <Link className="link" to={`/posts?cat=${cat}`}>
           {cat}
         </Link>
         </>
         })}
        </span>
      </div>
      <span className="postTitle">
        <Link to={`/Blogpage/${post._id}`} className="link">
       {post.title}
        </Link>
      </span>
      <hr />
      <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className="postDesc">
    {post.desc}
    </p>
  </div>
    </div>
  )
}
