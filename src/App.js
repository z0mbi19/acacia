import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import StyledByrger from "./Components/nav/Burger";
import Nav from "./Components/nav/NavBar";
import { LangProvider, BurgerProvider } from "./Context/Context";
import About from "./Components/About us/AboutUs";
import How from "./Components/How/how";
import Why from "./Components/Why/why";
import Blogs from "./Components/Blogs/Carousel";
import Sing from "./Components/Sing/Sing";
import Faq from "./Components/faq/Faq";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <BurgerProvider>
          <StyledByrger />
          <Nav />
          <About />
          <How />
          <Why />
          <Blogs />
          <Sing />
          <Faq />
        </BurgerProvider>
        <Footer />
      </LangProvider>
    </div>
  );
}

export default App;
