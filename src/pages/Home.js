import "./home.css";
import Header from "../components/Header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Posts from "../components/posts/Posts";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const[posts,setPosts] = useState([]);
  const {search} = useLocation()
  console.log(search); 
  const getposts = async () =>{
    const response =await axios.get("/posts/"+search);
    setPosts(response.data);
    console.log(posts)
  }

useEffect(()=>{getposts()},[search])
  return (
    <>
        <Header/>
<div className="home">
<Posts posts={posts}/>
<Sidebar/>
</div>
</>
  )
}
