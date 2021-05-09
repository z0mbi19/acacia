import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Button, Spinner } from "react-bootstrap";

import Nav from "../Components/navAticles/NavBar";
import Burger from "../Components/nav/Burger";
import Footer from "../Components/footer/Footer";
import ArticImg from "../Assets/blogs-img1.svg";
import { LangContext } from "../Context/Context";
import Strapi from "../api/strapi";

const Article = styled.div`
  justify-items: center;
  text-align: center;
  p {
    margin: 1% 20%;
    text-align: justify;
  }
  .btnBecome {
    border-radius: 5px;
    border: none;
    padding: 23px 45px;
    background: #29441e;
    color: white;
    white-space: nowrap;
  }
  .header-art {
    display: flex;
    justify-content: space-around;
  }
  .card-perfil {
    width: 300px;
    display: flex;
    box-shadow: 5px 5px 2px grey;
    border-radius: 5px;
    font-size: 10px;
    div {
      margin: 0 5px;
    }
  }
  div {
    margin-bottom: 2%;
    justify-content: center;
  }
`;

function Articles({ match }) {
  const [radio] = useContext(LangContext);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      await Strapi.get(`articles/${match.params.id}`).then((res) => {
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
    <div>
      <Nav />
      <Burger />
      <Article>
        {data ? (
          <h1>{radio === "en" ? data.TitleEn : data.TitlePt}</h1>
        ) : (
          <Spinner />
        )}
        <div className="header-art">
          <div className="card-perfil">
            <Avatar src={ArticImg} alt="img" />
            <div>
              <h5>Aaron Nichols</h5>
              <p>Jan 25,2021</p>
            </div>
            <div>
              <Button variant="success">Follow</Button>
              <p>4 min read ⭐</p>
            </div>
          </div>
          <div>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </div>
        </div>

        {data ? (
          <img src={data.img[0].url} alt="img" width="60%" />
        ) : (
          <Spinner />
        )}
        {data ? (
          <p>{radio === "en" ? data.TextEn : data.TextPt}</p>
        ) : (
          <Spinner />
        )}
        <button className="btnBecome">Sign newsletter</button>
      </Article>
      <Footer />
    </div>
  );
}

export default Articles;
