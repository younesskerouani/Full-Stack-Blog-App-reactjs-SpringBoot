import "./login.css";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { Context } from "../../context/Context";

export default function Login({signup}) {

  // using Context Api:
  const {user, dispatch, isFetching } = useContext(Context);
  /////////////////////////////////////////////////////
  const [isSignUp, setisSignUp] = useState(signup);
  const [error, setError] = useState(false);

  let navigate = useNavigate()

    const [user1,setUser]= useState({
        username: "",
        email: "",
        password: ""
    });

  const {username,email,password} = user1;

  const handleChange = (e)=>{
    setUser({...user1, [e.target.name]: e.target.value})
  }

// on click submit:
  const handleSubmit =async (e) => {
    e.preventDefault();

    
    dispatch({type: "LOGIN_START"});

      try{
      
          if(isSignUp){
            const res = await axios.post("http://localhost:8080/user/register", user1); 
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
          }else{

            const res = await axios.post("http://localhost:8080/user/login", user1);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
          }
        
      }catch (err){
        setError(true);
        dispatch({ type: "LOGIN_FAILURE" });
      }
}

  console.log(user);

  return (
    <div className="login">
       <span className="loginTitle">{isSignUp ? "register" : "Login "}</span>
      
      <form className="loginForm" onSubmit={handleSubmit}>
       
        {
          isSignUp && 
          <>
             <label>Email</label>

              <input className="loginInput" 
                type="text"
                  placeholder="Enter your email..." 
                  name="email"
                  value={email}
                  onChange={handleChange}
              />
          </>
        }

          <label>Username</label>
            <input className="loginInput"
              type="text"
              placeholder="Enter your username..."
              name="username"
              value={username}
              onChange={handleChange}
              />

        <label>Password</label>

        <input className="loginInput" 
            type="password"
            placeholder="Enter your password..." 
            name="password"
            value={password}
            onChange={handleChange}
        />
       
         <span style={{margin: '14px' , fontSize: '12px' , cursor: "pointer"}} 
         onClick = {()=> { setisSignUp((prev)=>!prev); } } >
          {isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}
          </span>
          

        <button className="loginButton" disabled={isFetching} >{isFetching? "Loading..." :  isSignUp ? "register" : "Login"}</button>
       { error && <span style={{color: "red", marginTop: "10px"}}> Something went wrong !</span> }
      </form>
    </div>
  );
}
