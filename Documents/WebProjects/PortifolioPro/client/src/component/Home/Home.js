import React from "react";
import Profile from "./Profile/Profile";
import Shape from "../../component/Shape/Shape";

import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <Profile />
        <Shape />
      </div>
    </div>
  );
};

export default Home;
