

 import App from './components/App';
  import About from './components/about';
   import Contact from './components/contact';


import Root from "./root";

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: App
      },
        {
        path: "/about",
        exact: true,
        component: About
      },
         {
        path: "/contact",
        exact: true,
        component: Contact
      },
    ]
  }
];

export default routes;