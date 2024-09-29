import React from "react";
import Navbar from "../components/Navbar";
import "./../App.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center p-4 mt-44">
      <h1 className="text-4xl mb-10"> معسكر جافا سكربت</h1>

       <img src="https://tuwaiq.edu.sa/img/ART/Asset%201.png" alt="home" className="w-1/4 mx-auto" />
       <hr></hr>
       <p></p>
      </div>
    </div>
  );
};

export default Home;
