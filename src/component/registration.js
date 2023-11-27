import * as React from 'react';
import './registration.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import axios from 'axios';
export default function Registration(){
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");
  const[cpass,setCpass]=useState("");
  
  
  const postinfo=()=>{
      axios.post('http://localhost:3001/profile',{"name":name,"email":email,"password":pass,"conformpassword":cpass})
     
  }
    
  
  
  
  return(    <div>
    
      <div className='regbody'>
      <div className='container'>
        <div className='contain'>
          <div className='header'>
          <h1 id='head'>Regist<span>er.!</span></h1>
          </div>
          <form>
          <label for="name"><h1>Name</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="name" label="Name" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
          
          <label for="email"><h1>Email</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="email" type='email' label="Email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)}/>
          <label for="password"><h1>Password</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="password" type='password' label="Password" variant="outlined" onChange={(e)=>setPass(e.target.value)} />
          <label for="conformpassword"><h1>Conform Password</h1></label>
          <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="conformpassword" label="Conform Password" variant="outlined" type='password' onChange={(e)=>setCpass(e.target.value)} />
          <div className='register'>
          <p id='already'>Already Have Account? <Link to='/re'>Login!!</Link></p>
          <button id="regis"  type='submit' onClick={postinfo}>
            
            {/* <Link to='/'> */}
             SIGN UP
            {/* </Link> */}
           </button>
           
          </div>
          </form>
        </div>
        <div>
          
        </div>
      </div>
      </div>
      
    </div>

  );
      
}
