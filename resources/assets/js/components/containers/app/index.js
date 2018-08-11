import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import Header from "../header";
import Footer from "../footer/index";
import FooterHTML5 from "../footer/index.html5";
import HeaderHTML5 from "../header/index.html5";
import { Provider } from "react-alert";
import AlertTemplate from "./alert-template";
import ReactDOM from 'react-dom';
const options = {
  timeout: 5000,
  position: "bottom center"
};

const App = () => (
  <Provider template={AlertTemplate} {...options}>
    <HeaderHTML5 />
    <div id='main' className='main'>
      <Home />
      <FooterHTML5 />
    </div>
  </Provider>
);

export default App;

if (document.getElementById('main-app')) {
  ReactDOM.render(<App />, document.getElementById('main-app'));
}
