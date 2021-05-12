import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import Nav from "../Components/navAticles/NavBar";
import Burger from "../Components/nav/Burger";
import Footer from "../Components/footer/Footer";
import ArticImg from "../Assets/blogs-img1.svg";
import { LangContext } from "../Context/Context";
import Strapi from "../api/strapi";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenusBlogs = styled.div`
  text-align: center;
  .itemMenu {
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 590px) {
      grid-template-columns: 1fr;
    }
  }

  .cardsItens {
    margin: 2% 5%;
    h3,
    p {
      text-align: start;
    }
  }

  .imgMenu {
    border-radius: 5px;
    width: 85%;
  }
  .tagsCard {
    display: flex;
    justify-content: space-evenly;
  }

  .tagsCard p:last-child {
    color: #56c125;
  }
`;

export default function MenuBlogs() {
  const [radio] = useContext(LangContext);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      await Strapi.get(`articles`).then((res) => {
        setData(res.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <Nav />
      <Burger />
      <MenusBlogs>
        <h1>Publications</h1>
        <p>Filter by theme:</p>
        <div className="boxBtn"></div>
        <div className="itemMenu">
          {data ? (
            data.map((data) => (
              <div className="cardsItens" key={data.id}>
                <Link to={`/article/${data.id}`}>
                  <img
                    className="imgMenu"
                    src={data.img[0].url}
                    alt={data.TitleEn}
                  />
                </Link>

                <div className="tagsCard">
                  <p>4July</p>
                  <p>{data.id} people read</p>
                  <p>{data.Categories}</p>
                </div>
                <h3>{radio === "en" ? data.TitleEn : data.TitlePt}</h3>
                <p>
                  {radio === "en"
                    ? data.TextEn.substring(0, 250) + "..."
                    : data.TextPt.substring(0, 250) + "..."}
                </p>
                <Link to={`/article/${data.id}`}>Read me...</Link>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </MenusBlogs>
      <Footer />
    </div>
  );
}
