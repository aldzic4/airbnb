import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import card from "./Images/user2.jpg";


export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Card img={card}
            rating = "5.0"
            reviewCount ={6}
            country = "BiH"
            title = "Life Lessons with Katie Zeferes "
            price = {136}
            
            />
    </div>
  );
}


