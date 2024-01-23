import '../style/login.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () =>{
const [username,setUsername]= useState('');
const [password,setPassword]= useState('');
const [error,setError]= useState('');

const navigate = useNavigate();

const clearError = () => {
    setError('');
};


const handleSignUp = async (e) =>{

    if(username==='' || password===''){
        setError("Please fill all the fields");
    }
    else{
    e.preventDefault();
    const response = await fetch('/register',{ method: 'POST',
     headers: {'Content-Type': 'application/json'},
     credentials: 'include',
     body: JSON.stringify({"username":username,"password":password}) 
    })
    console.log(response);
    const data = await response.json();

    if(response.status === 201){
        navigate('/login',{replace:true}) ;
    }{
        setError(data.message)
    }
 
    console.log(data);
}
}



return(
    <div className='mainBody'>
        <div className=''>
            <form className='loginTable'>
                <h1>Sign Up</h1>
                <label>Username</label>
                    <input type="text" placeholder="Omar" required onChange={(e)=> {setUsername(e.target.value);clearError()}} />
                <label>Password</label>
                <input type="password" placeholder="w@g67g%h" required onChange={(e)=>{setPassword(e.target.value);clearError()}}/>
                <button type="submit" onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
                {error && <h6>{error}</h6>}
            </form>
        </div>
    </div>
)
}





export default Register;