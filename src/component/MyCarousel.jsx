import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item >
        <img
          className="d-flex movie"
          src="https://images-na.ssl-images-amazon.com/images/I/71wbalyU7tL._AC_SY741_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="bar">Top Movie - Elección de los Críticos</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block movie"
          src="https://images-na.ssl-images-amazon.com/images/I/91sustfojBL._AC_SY879_.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2 className="bar">Top Movie - Elecciòn de Movierank</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block movie"
          src="https://cdn.shopify.com/s/files/1/1416/8662/products/interstellar_2014_advance_original_film_art_682852f2-23f6-46de-a1db-4029d5b6f0b4_5000x.jpg?v=1574284010"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2 className="bar">Top Movie - Elección del público</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}





export default MyCarousel;