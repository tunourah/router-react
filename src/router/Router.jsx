// src/router/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default  Router;
