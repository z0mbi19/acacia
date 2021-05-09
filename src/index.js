import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Articles from "./pages/Article";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LangProvider, BurgerProvider } from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <LangProvider>
          <BurgerProvider>
            <Route path="/" exact={true} component={App} />
            <Route path="/article/:id" component={Articles} />
          </BurgerProvider>
        </LangProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
