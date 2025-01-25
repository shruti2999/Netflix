import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'
const Player = () => {

  const{id}=useParams();

  const [apiData,setapiData]=useState({
    name:"",
    Key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmQ0Y2Q4NWMxZTdmY2ExY2MwMjlmNDIxYjk1NGYyOSIsIm5iZiI6MTczNzgwMTIyMS40NzQsInN1YiI6IjY3OTRiZTA1NDRlZjM5Yzg2MDE4ODJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s8r_Ejym9gubf6zY_5elFtZis33PyDr0Ho4Cw81ZcZM'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0 ]))
    .catch(err => console.error(err));
  },[])
  
  return (   
    <div className='Player'>
      <img src ={back_arrow_icon} alt=""/>
      <iframe width='90%' height='90%' 
      src ={`https://www.youtube.com/embed/${apiData.key}`}
       title ='trailer' frameBorder= '0' allowFullScreen></iframe>
       <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player