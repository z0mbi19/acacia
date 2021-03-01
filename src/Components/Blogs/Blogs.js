import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";
//import { parseISO, format } from "date-fns";

import { textBlogs } from "../../Lang/lang";
import { LangContext } from "../../Context/Context";
import Strapi from "../../api/strapi";

import blogImg from "../../Assets/blogs-img1.svg";
import blogImg2 from "../../Assets/blogs-img2.svg";

const BlogsStyles = styled.div`
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  .cardblog {
    display: flex;
    text-align: start;
    margin: 2% 5%;
    @media (max-width: 850px) {
      flex-wrap: wrap;
    }
  }
  .postblog {
    width: 60%;
    @media (max-width: 850px) {
      width: 90%;
      text-align: center;
      margin-left: 3%;
    }
  }
  .datapost {
    display: flex;
    justify-content: space-around;
  }
  .miniblog {
    display: flex;
    flex-flow: row;
    margin: 3%;
    @media (max-width: 850px) {
      flex-wrap: wrap;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
  .textcard {
    margin: 0 2%;
  }
`;

function Blogs() {
  const [radio] = useContext(LangContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      await Strapi.get("blogs").then((res) => {
        setData(res.data);
      });
      setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <BlogsStyles id="blogs">
      <h1>{radio === "en" ? textBlogs.en.title : textBlogs.br.title}</h1>

      <div className="cardblog">
        <div className="postblog">
          <img src={blogImg} alt="blogImg" width="100%" />
          <div className="datapost">
            <p>2 july</p>
            <p>3 people read</p>
            <p>6 comments</p>
          </div>
          <div>
            <h3>
              {loading ? (
                data.find((x) => x.id === data.length).titleBlog
              ) : (
                <Spinner animation="border" />
              )}
            </h3>
            <p>
              {loading ? (
                data
                  .find((x) => x.id === data.length)
                  .textBlog.substring(0, 300) + "..."
              ) : (
                <Spinner animation="border" />
              )}
            </p>
            <a href="#blogs">
              <p>{radio === "en" ? textBlogs.en.read : textBlogs.br.read}</p>
            </a>
          </div>
        </div>
        <div>
          <div className="miniblog">
            <div>
              <img src={blogImg2} alt="blogImg" width="170px" />
            </div>
            <div>
              <div className="datapost">
                <p>2 july</p>
                <p>3 people read</p>
                <p>6 comments</p>
              </div>
              <div className="textcard">
                <h3>
                  {loading ? (
                    data.find((x) => x.id === data.length - 1).titleBlog
                  ) : (
                    <Spinner animation="border" />
                  )}
                </h3>
                <p>
                  {loading ? (
                    data
                      .find((x) => x.id === data.length - 1)
                      .textBlog.substring(0, 100) + "..."
                  ) : (
                    <Spinner animation="border" />
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="miniblog">
            <div>
              <img src={blogImg2} alt="blogImg" width="170px" />
            </div>
            <div>
              <div className="datapost">
                <p>2 july</p>
                <p>3 people read</p>
                <p>6 comments</p>
              </div>
              <div className="textcard">
                <h3>
                  {loading ? (
                    data.find((x) => x.id === data.length - 2).titleBlog
                  ) : (
                    <Spinner animation="border" />
                  )}
                </h3>
                <p>
                  {loading ? (
                    data
                      .find((x) => x.id === data.length - 2)
                      .textBlog.substring(0, 100) + "..."
                  ) : (
                    <Spinner animation="border" />
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="miniblog">
            <div>
              <img src={blogImg2} alt="blogImg" width="170px" />
            </div>
            <div>
              <div className="datapost">
                <p>2 july</p>
                <p>3 people read</p>
                <p>6 comments</p>
              </div>
              <div className="textcard">
                <h3>
                  {loading ? (
                    data.find((x) => x.id === data.length - 3).titleBlog
                  ) : (
                    <Spinner animation="border" />
                  )}
                </h3>
                <p>
                  {loading ? (
                    data
                      .find((x) => x.id === data.length - 3)
                      .textBlog.substring(0, 100) + "..."
                  ) : (
                    <Spinner animation="border" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogsStyles>
  );
}

export default Blogs;
