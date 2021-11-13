import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            style={{
              display: "block",
              height: "470px",
              width: "100%",
            }}
            src="https://www.topbrandscompare.com/wp-content/uploads/2019/07/HP-banner-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Choose your dream Laptop with us</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              atque hic fugiat repellat ipsum illo repellendus nulla suscipit,
              minus exercitationem facilis reiciendis reprehenderit cupiditate
              dolores enim expedita iste tenetur? Suscipit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{
              display: "block",
              height: "470px",
              width: "100%",
            }}
            src="https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Choose your dream Laptop with us</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              atque hic fugiat repellat ipsum illo repellendus nulla suscipit,
              minus exercitationem facilis reiciendis reprehenderit cupiditate
              dolores enim expedita iste tenetur? Suscipit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              display: "block",
              height: "470px",
              width: "100%",
            }}
            src="https://cdn11.bigcommerce.com/s-tr29lmokh7/images/stencil/1280x1280/i/laptop%20category%20banner%20-%208__29631.original.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Choose your dream Laptop with us</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              atque hic fugiat repellat ipsum illo repellendus nulla suscipit,
              minus exercitationem facilis reiciendis reprehenderit cupiditate
              dolores enim expedita iste tenetur? Suscipit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
