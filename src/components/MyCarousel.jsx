import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { store, actions } = useContext(Context);

  useEffect(() => {
    const topMovies = ["tt0111161", "tt0068646", "tt0068646"];
    topMovies.forEach((item) => {
      actions.getTopMovies(item);
    });
  }, []);


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {!!store.topMovies && store.topMovies.length>0 && store.topMovies.map((item, indexa) => { 
        return ( 
        
            <Carousel.Item key={indexa} >
              <img
                className="d-block movie"
                src={item.Poster}
                alt="poster"
              />
              <Carousel.Caption>
                <h2 className="bar">{item.Title}</h2>
              </Carousel.Caption>
            </Carousel.Item>
        );
      })}
    </Carousel>
  );
}





export default MyCarousel;