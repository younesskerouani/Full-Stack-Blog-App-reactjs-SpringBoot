import "./home.css"

import React, {useState, useEffect } from 'react'
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Home = () => {
  const [posts,setPosts] = useState([]);
  const {search}= useLocation();

  console.log(search);

  useEffect(()=>{
    const fetchPosts = async() =>{
      const res = await axios.get("http://localhost:8080/post/" + search);
      setPosts(res.data);
    }

    fetchPosts();
  },[search])

  return (
    <div>
      <Header/>
      <div className="home">
      <Posts posts={posts} />
      <Sidebar/>
    </div>
    </div>
    
  )
}

export default Home
