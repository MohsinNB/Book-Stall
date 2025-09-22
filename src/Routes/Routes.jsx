import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Roots/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../components/About/About";
import BookDetails from "../components/BookDetails/BookDetails";

const BookPromise = fetch("booksData.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("./booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
