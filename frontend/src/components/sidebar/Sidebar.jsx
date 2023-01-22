import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {

  const [cats,setCats] = useState([])
  
  useEffect(()=> {
    const getCats = async() => {
          const res = await axios.get("http://localhost:8080/categories")
          setCats(res.data);
        }
     getCats();   
  },[]);  


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://file.hstatic.net/200000333181/article/wwfh-960x641-1_ebfb78dd7a364d528507bb9f625c2165_1024x1024.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
       
          {cats.map((c)=> (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem"> {c.name} </li> 
            </Link>
            
          ))}

        </ul>
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
  );
}