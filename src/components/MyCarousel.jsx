import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const MyCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const { store, actions } = useContext(Context);

  // const [ topMovies, setTopMovies] = useState(['tt0111161','tt0068646'])

  useEffect(() => {
    actions.getTopMovies(['tt0111161', 'tt0068646']);
  }, []);
 


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {store.topMovies.map((item, index) => {
        return (
          <>
            <Carousel.Item >
              <img
                className="d-block movie"
                src={item.poster}
                alt="poster"
              />
              <Carousel.Caption>
                <h2 className="bar">{item.title}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </>
        );
      })}


    </Carousel>
  );
}





export default MyCarousel;