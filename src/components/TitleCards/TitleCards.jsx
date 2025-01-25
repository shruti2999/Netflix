import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import {Links} from 'react-router-dom'

const TitleCards = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);
  const cardsRef = useRef();
 
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmQ0Y2Q4NWMxZTdmY2ExY2MwMjlmNDIxYjk1NGYyOSIsIm5iZiI6MTczNzgwMTIyMS40NzQsInN1YiI6IjY3OTRiZTA1NDRlZjM5Yzg2MDE4ODJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s8r_Ejym9gubf6zY_5elFtZis33PyDr0Ho4Cw81ZcZM",
    },
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        (category?category:"now_playing"
    )}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setapiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handlewheel);
  }, []);
  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular on NetFlix"}</h2>
      <div className="card-List" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to ={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
