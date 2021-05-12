import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Carousel, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import ImgBlog from "../../Assets/blogs-img1.svg";
import { LangContext } from "../../Context/Context";
import Strapi from "../../api/strapi";

const CarStyled = styled.div`
  width: 80%;
  margin-left: 10%;
  text-align: center;
  .imgCard {
    border-radius: 5px;
  }
  .carrossel {
    width: 50%;
    border-radius: 10px;
    margin-left: 25%;
  }
`;

function CarouselBlogs() {
  const [radio] = useContext(LangContext);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      await Strapi.get("articles").then((res) => {
        setData(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CarStyled>
      <h1 id="blogs">Blogs</h1>
      <Carousel className="carrossel">
        <Carousel.Item>
          {data ? (
            <>
              <Link to={`/article/${data[data.length - 1].id}`}>
                <img
                  className="d-block w-100 imgCard"
                  src={data[data.length - 1].img[0].url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    {radio === "en"
                      ? data[data.length - 1].TitleEn
                      : data[data.length - 1].TitlePt}
                  </h3>
                </Carousel.Caption>
              </Link>
            </>
          ) : (
            <h1>Loaddin...</h1>
          )}
        </Carousel.Item>
        <Carousel.Item>
          {data ? (
            <>
              <Link to={`/article/${data[data.length - 2].id}`}>
                <img
                  className="d-block w-100 imgCard"
                  src={data[data.length - 2].img[0].url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    {radio === "en"
                      ? data[data.length - 2].TitleEn
                      : data[data.length - 2].TitlePt}
                  </h3>
                </Carousel.Caption>
              </Link>
            </>
          ) : (
            <></>
          )}
        </Carousel.Item>
        <Carousel.Item>
          {data ? (
            <>
              <Link to={`/article/${data[data.length - 3].id}`}>
                <img
                  className="d-block w-100 imgCard"
                  src={data[data.length - 3].img[0].url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    {radio === "en"
                      ? data[data.length - 3].TitleEn
                      : data[data.length - 3].TitlePt}
                  </h3>
                </Carousel.Caption>
              </Link>
            </>
          ) : (
            <></>
          )}
        </Carousel.Item>
      </Carousel>
    </CarStyled>
  );
}

export default CarouselBlogs;
