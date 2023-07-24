import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <div className="homepage">
      <h1>Hello {location.state.id} and welcome to the home</h1>
    </div>
  );
};
export default Home;
