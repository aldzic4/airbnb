import React from "react";
import card from "../Images/user2.jpg";
import star from "../Images/noprofilepic.png"

export default function Card(){
    return (
       <div className="card">
            <img src={card} alt="star" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="Star" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6)</span >
                <span className="gray">USA</span>

            </div>
            <p>Life Lessons with Katie Zeferes </p>
            <p><span className="bold">From $136 </span>/ person </p>
       </div>
    )
} 