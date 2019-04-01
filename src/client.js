
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
 import App from './components/App';
  import About from './components/about';
   import Contact from './components/contact';
import { Route, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import Root from "./root";





ReactDOM.hydrate(
<BrowserRouter>
<div>{renderRoutes(routes)}</div>
</BrowserRouter>,
  document.getElementById("root")
);

 