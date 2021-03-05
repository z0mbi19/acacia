import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import ImgBlog from "../../Assets/blogs-img1.svg";

const CarStyled = styled.div`
  width: 80%;
  margin-left: 10%;
`;

function CarouselBlogs() {
  return (
    <CarStyled>
      <a href="/article/1">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={ImgBlog} alt="First slide" />
            <Carousel.Caption>
              <h3>The bigness of biodiversity</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <p>See more articles</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ImgBlog} alt="Second slide" />

            <Carousel.Caption>
              <h3>The bigness of biodiversity</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>See more articles</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={ImgBlog} alt="Third slide" />

            <Carousel.Caption>
              <h3>The bigness of biodiversity</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <p>See more articles</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </a>
    </CarStyled>
  );
}

export default CarouselBlogs;
