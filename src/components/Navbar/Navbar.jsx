import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
 
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar_left'>
        <img src={logo}alt="Logo"/>
        <ul>
        <li>Home</li>
        <li>TVShow</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse By Languages </li>
        </ul>
        </div>
        <div className='navbar_right'>
          <img src={search_icon} alt="search_icon" className='icons'/>  
          <p>children</p>
          <img src ={bell_icon} alt="bell" className='icons'/>
          <div className="navbar_profile">
          <img src ={profile_img} alt="" className='profile'/>
          <img src ={caret_icon} alt="" />
          <div className='dropdown'>
          <p onClick={()=>{
            {logout()}
          }}>
            Sign Out Of Netflix
          </p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar