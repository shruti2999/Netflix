import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='Home'>
          <Navbar/>
          <div className='hero'>
            <img src={hero_banner} alt="back" className='banner-img'/>
            <div className='hero_caption'>
              <img src={hero_title} className='caption_img'/>
              <p>
                  hello
              </p>
              <div className="hero_btns">
               <button className='btn'><img src={play_icon} alt=""/>Play</button>
               <button className='btn dark-btn'><img src={info_icon} alt=""/>More info</button>  
              </div>
              <TitleCards/>
            </div>
          </div> 
          <div className="more_cards">
          <TitleCards className="cards" title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards className="cards" title={"Only on Netflix"} category={"popular"}/>
          <TitleCards className="cards" title={"Upcoming"} category={"upcoming"}/>
          <TitleCards className="cards"  title={"Top Pics for You"}category={"now_playing"}/>
          </div>
          <Footer/>
    </div>
  )
}

export default Home