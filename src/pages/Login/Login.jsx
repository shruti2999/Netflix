import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import{useState} from 'react'
import {login, signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

    const [signState,setsignState]=useState("Sign In")
    const [name ,setname]=useState();
    const[email,setemail]=useState();
    const [password,setpassword]=useState();
    const [loading,setloading]=useState(false);

    const user_auth = async(event) =>{
      event.preventDefault();
      setloading(true);
      if(signState==="Sign In"){
        await login(email,password);
      }else{
        await signup(name,email,password);
      }
      setloading(false);
    }
  return (
    loading?<div className="login_spinner">
      <img src={netflix_spinner}alt=''/>
    </div>:
    <div className='login'>
      <img src ={logo} className='login_logo' alt=" "/>
      <div className='login_form'>
        <h1>{signState}</h1>
        <form>{signState==="Sign Up"?<input  value={name} onChange={(e)=>{setname(e.target. value)}}type='text' placeholder='UserName'/>:<></>}
          
          <input value={email} onChange={(e)=>{setemail(e.target. value)}} type ='email' placeholder="Email"/>
          <input value={password} onChange={(e)=>{setpassword(e.target. value)}} type ="password" placeholder='password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className='form_help'>
            <div className="remember">
                <input type="checkbox"/>
                <label htmlFor="">Remember Me</label>  
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form_switch'>
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=>{setsignState("Sign Up")}}>
            Sign Up Now</span></p>
          :<p>Already have account?<span onClick={()=>{setsignState("Sign In")}}
          >Sign In Now</span></p>}
          
        </div>
      </div>
    </div>
  )
}

export default Login