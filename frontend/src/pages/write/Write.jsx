import { useContext,useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [title, setTitle]= useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
      e.preventDefault();
      const newPost = {
        username: user.username,
        title,
        desc,
      };
      if(file){
        const data =new FormData();
        const filename =file.name;
         data.append("name",filename);
         data.append("image",file);
         newPost.photo = filename;
          try{
            await axios.post("http://localhost:8080/image",data); 
              }catch(err){
                   }
      }
     
        try{
         const res = await axios.post("http://localhost:8080/post",newPost);
          //window.location.replace("http://localhost:8080/post/"+res.data._id); 
          navigate("/");
        }catch(err){
         }
      
    };

  return (
    <div className="write">
     {file &&
      <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      }
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
        
          <input id="fileInput" 
          type="file" 
          style={{ display: "none" }} 
          onChange={(e)=>setFile(e.target.files[0])} />
          
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
