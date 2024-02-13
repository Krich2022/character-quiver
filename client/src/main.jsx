import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./utils/reducers/reducers.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup.jsx";
import Landing from "./pages/Landing.jsx";
import CharacterCreationForm from "./pages/CharacterCreationForm.jsx";
import CharacterSheet from "./pages/CharacterSheet.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Landing />},
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/create",
        element: <CharacterCreationForm />,
      },
      {
        path: "/character",
        element: <CharacterSheet />,
      },
    ],
  },
]);
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
