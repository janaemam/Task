import '../style/login.css';
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Login = ({setAuthenticated}) =>{
const [username,setUsername]= useState('');
const [password,setPassword]= useState('');
const [error,setError]= useState('');
const navigate = useNavigate();

const clearError = () => {
    setError('');
};

const handleSignIn = async (e) =>{

    if(username==='' || password===''){
        setError("Please fill all the fields");
    }
    else{
    e.preventDefault();
    const response = await fetch('/login',{ method: 'POST',
     headers: {'Content-Type': 'application/json'},
     credentials: 'include',
     body: JSON.stringify({"username":username,"password":password}) 
    })
    console.log(response);
    const data = await response.json();

    if(response.status === 200){
       localStorage.setItem('authenticated',true);
       localStorage.setItem('username',username);
       setAuthenticated(true);
        navigate('/home',{replace:true}) ;
    }
    else{
        setError(data.message)
    }
 
    console.log(data);
}
}



return(
    <div className='mainBody'>
        <div className=''>
            <form className='loginTable'>
                <h1>Sign In</h1>
                <label>Username</label>
                <input type="text" placeholder="Omar" required onChange={(e)=> {setUsername(e.target.value); clearError()}} />
                <label>Password</label>
                <input type="password" placeholder="w@g67g%h" required onChange={(e)=>{setPassword(e.target.value);clearError()}}/>
                <button type="submit" onClick={handleSignIn}>Sign In</button>
                <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                {error && <h6>{error}</h6>}
            </form>
        </div>
    </div>
)
}





export default Login;