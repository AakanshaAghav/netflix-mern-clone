import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from './Browse';
import Login from './Login';
import Header from './Header';
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/header",
    element: <Header />
  }
]);

function Body() {
  return <RouterProvider router={approuter} />;
}

export default Body;
