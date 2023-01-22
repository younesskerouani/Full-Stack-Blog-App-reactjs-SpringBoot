import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./SinglePost.css";
import { useNavigate } from "react-router-dom";

export default function SinglePost() {

  let navigate = useNavigate();

  const PublicFolder= "http://localhost:8080/image/"

  const {user} = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  console.log(path);

  useEffect(() => {
      const getPost =async() => {
        const res = await axios.get("http://localhost:8080/post/" +path);
        setPost(res.data);
        console.log(res);
      };

      getPost()
  },[path])

  const handleDelete = async() => {

      await axios.delete(`http://localhost:8080/post/${post.postId}`, {data:user.username} );
      navigate("/");
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">

      {post.photo && 
       <img
          className="singlePostImg"
          src={PublicFolder+post.photo}
          alt=""
        />
       }

        
        <h1 className="singlePostTitle">
           {post.title}
           { post.username === user?.username && 
            
            (<div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>)
           
           }
         
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
            <b className="singlePostAuthor">
             {post.username}
            </b>
            </Link>
            
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
         </p>
      </div>
    </div>
      );
    }
    