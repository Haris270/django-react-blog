import React from "react";
import ReactDOM from "react-dom/client"; //"react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/Navbar.tsx";
import ImageSlider from "./components/ImageSlider.tsx";
import ContentNavbar from "./components/ContentNavbar.tsx";

import "./components/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // const routing = (
  <Router>
    <React.StrictMode>
      <NavBar />
      <ImageSlider />
      <ContentNavbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>

      {/* <App />  */}
    </React.StrictMode>
  </Router>
);
