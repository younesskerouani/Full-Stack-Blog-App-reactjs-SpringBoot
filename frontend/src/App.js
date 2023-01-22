import Home from "./pages/homepage/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import {Routes, Route} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  const signup = false;
  return (
    <div className="App">
    
      <Topbar />
      
      <Routes>
      <Route  exact path="/" element = { <Home/> }/>
      <Route  path="/posts" element = { <Home/> }/>
      <Route  path="/register" element = {user ? <Home/> : <Login signup={true}/>}/>
      <Route  path="/login" element = {user ? <Home/> : <Login signup={signup}/>}/>
      <Route  path="/post/:id" element = { <Single /> }/>
      <Route  path="/write" element = {user ? <Write /> : <Login signup={signup}/>}/>
      <Route  path="/settings" element = {user ? <Setting/> : <Login signup={signup}/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
