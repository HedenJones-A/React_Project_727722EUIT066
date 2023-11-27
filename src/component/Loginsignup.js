import './Loginsignup.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import axios from 'axios';
export default function Loginsignup(){
    
    

      
      
      const navigate=useNavigate();
  const [name,setName]=useState();
  const [password,setpass]=useState();
  // const [p,setp]=useState();
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState(false);
  // const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.get('http://localhost:3001/register');
      const user = response.data.find((user) => user.name === name);
     
      if (user) {
        if (user.password === password) {
          alert("login success")
          navigate('/'); // Redirect to dashboard on successful login
          setError(false)
        } else {
          setSuccess(false);
          setError(true);
        }
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle other errors if needed
    }
    console.log("hi");
  };
      
    
        return(
            
            <div className="loginbody">


                <div className="contain">
                <form onSubmit={handleSubmit}>
                    <div className="dis">
                    <div className="heading">
                        <h1>Log<span>in</span></h1>
                        <div className="underline"></div>
                    </div>
                    
                    <label for="name" id='names'>Name</label>
                    <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="tname" label="Name" variant="outlined" required onChange={(e)=>setName(e.target.value)}/>
                    <label for="name" id='passwd'>Password</label>
                    <TextField sx={{marginTop:'5px',width:'100%',backgroundColor:"white"}}id="tpass" type='password' label="Password" required variant="outlined" onChange={(p)=>setpass (p.target.value)}/>
                       
                        
                        
                        
                        
                    
                    <p id='click'>Forgot Password ? <a href="">Click Here.</a></p>
                    </div>

                    <div className="media">
                        
                        <h4>OR</h4>
                        <div className="img">
                            <img alt="Img" src="https://seeklogo.com/images/G/gmail-icon-logo-9ADB17D3F3-seeklogo.com.png"/>
                            <img alt="Img" style={{borderRadius:'40px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMoO9nLVsXrKgriT1jFxgODulJfmbfaqstyo_xYmM-netHXgqUsddHbjR8r5apB2f5nw&usqp=CAU"/>
                            <img alt="Img" style={{borderRadius:'100px'}} src="https://p1.hiclipart.com/preview/205/754/496/facebook-social-media-icons-social-networking-service-logo-influencer-marketing-icon-design-blog-red-text-png-clipart.jpg"/>
                        </div>
                        <h4></h4>
                    </div>
                    
                    <div className='loginbutton'>

                        <button type='submit' sx={{width:'25px'}}><h2>Login</h2></button>

                       
                        <button type='submit' color='black' id='loginsignup'><Link to='/reg'><h2>Sign up</h2></Link></button>
                    </div>
                        
                        
                        
                    
                    </form>
                </div>
                
            </div>
        );
}