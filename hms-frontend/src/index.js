import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/router-error.js";
import SignIn from "./components/pages/signIn.js";
import Dashboard from "./components/pages/dashboard.js";
import Services from "./components/pages/services/service.js";
import Food from "./components/pages/services/food.js";
import Music from "./components/pages/services/music.js";
import Transport from "./components/pages/services/transport.js";
import BookingPage from "./components/pages/bookings/bookingPage.js";
import BookingConfirmationPage from "./components/pages/bookings/bookingConfirmationPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      { path: "bookingPage", element: <BookingPage /> },
      { path: "bookingConfirmationPage", element: <BookingConfirmationPage /> },
      {
        path: "services",
        element: <Services />,
        children: [
          { path: "food", element: <Food /> },
          { path: "transport", element: <Transport /> },
          { path: "music", element: <Music /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
