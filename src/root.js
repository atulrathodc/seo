
import React from 'react'
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { Route, Link } from "react-router-dom";

function Root({ route }) {


  return (
    <div>

  <Link to="/about/">About</Link> <Link to="/contact/">Contact</Link>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
  );
}

export default Root;