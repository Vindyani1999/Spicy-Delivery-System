import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import classes from "./slider.module.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        className={classes.image}
      >
        <Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage src="/slider/10.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage src="/slider/11.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage src="/slider/12.jpg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage src="/slider/13.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage src="/slider/14.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage src="/slider/15.jpg" alt="Third slide" />
          </Carousel.Item>
          <ExampleCarouselImage src="/slider/1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/3.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/4.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/5.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/6.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/7.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/8.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="/slider/9.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
