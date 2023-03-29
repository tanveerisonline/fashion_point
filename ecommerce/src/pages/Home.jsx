import React from "react";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
