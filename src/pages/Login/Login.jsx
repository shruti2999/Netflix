import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import{useState} from 'react'
import login from '../../firebase'
import signup from '../../firebase'


const Login = () => {

  
    const [signState,setsignState]=useState("Sign In")
    const [name ,setName]=useState();
    const[email,setemail]=useState();
    const [password,setpassword]=useState();

    const user_auth = async(event) =>{
      event.preventDefault();
      if(signState==="Sign In"){
        await login(email,password);
      }else{
        await signup(name,email,password);
      }
    }
  return (
    <div className='login'>
      <img src ={logo} className='login-logo' alt=" "/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>{signState==="Sign Up"?<input  value={name} onChange={(e)=>{setName(e.target. value)}}type='text' placeholder='UserName'/>:<></>}
          
          <input value={email} onChange={(e)=>{setemail(e.target. value)}} type ='email' placeholder="Email"/>
          <input value={password} onChange={(e)=>{setpassword(e.target. value)}} type ="password" placeholder='password'/>
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className='form-help'>
            <div className="remember">
                <input type="checkbox"/>
                <label htmlFor="">Remember Me</label>  
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
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