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
    const topMovies = ["tt0111161", "tt0068646", "tt0468569", "tt0050083", "tt0110912", "tt0137523", "tt0109830", "tt1375666"];
    topMovies.forEach((item) => {
      actions.getTopMovies(item);
    });
  }, []);


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {!!store.topMovies && store.topMovies.length > 0 && store.topMovies.map((item, indexa) => {
        return (

          <Carousel.Item key={indexa} >
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <img
                    className="d-block rounded"
                    src={item.Poster}
                    alt="poster"
                  />
                </div>
                <div className="col m-2">
                  <h2>{item.Title}</h2>
                  <p className="p-2">{item.Plot}</p>
                  <em >{item.Year}</em>
                  <h5>Dirigida por: {item.Director}</h5>
                  <h5>Cast: {item.Actors}</h5>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}





export default MyCarousel;