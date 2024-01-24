import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/register";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const check = async () => {

    const response = await fetch("/authenticated",{methods:'GET'});
    const data = await response.json();
    if(response.status === 200){
      setAuthenticated(true);
      localStorage.setItem('authenticated',true);
      localStorage.setItem('username',data.username);
    }
    else{
      setAuthenticated(false);
    }
  }

  useEffect(()=>{
      check();

  },[])
  
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ authenticated?(<Navigate to="/home" replace/>):(<Navigate to="/login" replace/>) } />
          <Route path="/login" element={authenticated? <Navigate to="/home" replace /> : <Login setAuthenticated={setAuthenticated}/>} />
          <Route path="/home" element={authenticated? (<Home/>):(<Navigate to="/login" replace state={{from: '/home'}}/>)} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
