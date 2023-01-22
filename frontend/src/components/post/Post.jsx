
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) {
  const PublicFolder= "http://localhost:8080/image/"
  return (
    <div className="post">
     {
     post.photo && <img
        className="postImg"
        src={PublicFolder + post.photo}
        alt=""
      />
      }
      
      <div className="postInfo">
        <div className="postCats">
        
            {post.categories?.map((c) => (
              <span className="postCat">{c.name}</span>
             
             ))}
        
        </div>
        <br/>
        <Link to={`/post/${post.postId}`}  className="link">
        <span className="postTitle"> {post.title}</span>
        </Link>
        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString}</span>
      </div>
      <p className="postDesc">
         {post.desc}
      </p>
    </div>
  );
}
