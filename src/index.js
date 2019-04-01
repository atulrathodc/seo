

// import { createServer } from "http";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
 import { StaticRouter } from "react-router";
// import App from "./components/App";
// import express from 'express';
// import path from 'path'
//  import bodyParser from 'body-parser';

// const port = 3000;
// const app1 = express();
// app1.use(express.static('dist'));
// app1.use(bodyParser.json());
// app1.use(bodyParser.urlencoded({ extended: true }));
// app1.use(express.static(__dirname + 'public'));

// createServer((req, res) => {
//   const context = {};

//   const html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url} context={context}>
//       <App />
//     </StaticRouter>
//   );

//   if (context.url) {
//     res.writeHead(301, {
//       Location: context.url
//     });
//     res.end();
//   } else {
//     const u=`<script src="./client.js"></script>`;
//     res.write(`
      

//       <div id="app">${html}
      
//       </div>

//     `);
//     res.end();
//   }
// }).listen(3000);



// src/index.js
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from "./components/App";
import bodyParser from 'body-parser';
import About from './components/about';
import { Route, Link } from "react-router-dom";
   import Contact from './components/contact';
import { matchRoutes, renderRoutes } from "react-router-config";
import routes from "./routes";
import Root from "./root";
const app = express()

app.use(express.static('dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('*', (req, res) => {
  const name = 'Marvelous Wololo'
  
 // const branch = matchRoutes(routes, "/about");
  //console.log(branch);
const context = {};
  const component = ReactDOMServer.renderToString(
  <StaticRouter location={req.path} context={context}>
    <div>{renderRoutes(routes)}</div>
    </StaticRouter>
  )

  const html = `
  <!doctype html>
    <html>
    <head>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">${component}</div>
     <script src="http://localhost:3000/client.js"></script>
  </body>
  </html>`

  res.send(html)
})

app.listen(3000)