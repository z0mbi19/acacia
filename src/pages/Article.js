import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Button } from "react-bootstrap";

import Nav from "../Components/nav/NavBar";
import Burger from "../Components/nav/Burger";
import Footer from "../Components/footer/Footer";
import ArticImg from "../Assets/blogs-img1.svg";

const Article = styled.div`
  justify-items: center;
  text-align: center;
  p {
    margin: 1% 10%;
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

function Articles() {
  return (
    <div>
      <Nav />
      <Burger />
      <Article>
        <h1>The bigness of biodiversity</h1>
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
        <img src={ArticImg} alt="img" width="60%" />
        <p>
          In a paper published in the science journal Nature in September 2019,
          researchers showed how wilderness areas clearly act as a buffer
          against extinction risk. Using a modeling program that provides
          fine-scale estimates of the probability of species loss around the
          globe and integrating it with the latest human footprint map generated
          by the University of Queensland and other collaborators, they were
          able to show that the risk of species loss is over twice as high for
          biological communities found outside wilderness areas. What’s more,
          wilderness habitat makes an even larger contribution, as some species
          can occur both inside and outside of wilderness areas, making this
          type of habitat essential for the persistence of many species that
          otherwise live in degraded environmental conditions.
        </p>
        <p>
          Of course, around the world, wildernesses provide differing roles,
          with some areas playing an extraordinary part in their respective
          regional contexts, where their loss would drastically reduce
          biodiversity. Examples of such areas include sections of the Arnhem
          Land in Australia, areas surrounding Madidi National Park in the
          Bolivian Amazon, forests in southern British Columbia (which are only
          partly protected), and savannah areas inside and outside the Zemongo
          Faunal Reserve in the Central African Republic.
        </p>
        <p>
          The paper’s authors argue that a strategic expansion of the global
          protected-area estate is needed to preserve the irreplaceable
          wilderness areas that are most at risk, alongside national land-use
          legislation and the enforcement of business standards for stopping
          industrial footprints within intact ecosystems.
        </p>
        <p>
          At the beginning of 2020 at the World Economic Forum, biodiversity
          loss was highlighted as the third biggest risk to the planet in terms
          of likelihood and severity. An example of a vital and unique ecosystem
          that is on the verge of being lost is Kenya’s Lake Turkana, which is
          not only a habitat for a variety of wildlife but a provider of food
          and income for 300,000 people. The world’s largest permanent desert
          lake, Lake Turkana is currently being affected by a combination of
          human activities, such as overfishing, and climate change processes,
          such as cyclical drought and changing rainfall patterns.
        </p>
        <p>
          Scientists warn that the Earth’s sixth mass extinction is already
          escalating and say that over 500 species of animals are at risk of
          becoming extinct in the next 20 years. This rate of loss would have
          taken thousands of years without the human destruction of nature.
        </p>
        <p>
          Because of this urgency and the importance of biodiversity, rich
          countries may have to pay poorer nations to protect wildernesses.
        </p>
        <p>
          In February 2020, negotiations with delegates from more than 140
          countries took place at the Food and Agriculture Organization of the
          United Nations’ headquarters in Rome over the growing issue of
          biodiversity and ecosystem loss. A 20-point agreement was discussed
          that consisted of suggestions to protect a third of Earth’s lands and
          oceans, while also reducing pollution from plastic waste and excess
          nutrients by 50 percent. As a result, rich countries—such as China and
          the U.S.—could be asked to pay nations with biodiverse,
          life-sustaining ecosystems—such as the Amazon rain forest—billions of
          dollars a year for the services those ecosystems provide for the
          world, halting and even reversing biodiversity decline. In return,
          profits from discoveries linked to these nation’s natural resources,
          such as new drugs, would be shared.
        </p>
        <button className="btnBecome">Sign newsletter</button>
      </Article>
      <Footer />
    </div>
  );
}

export default Articles;
