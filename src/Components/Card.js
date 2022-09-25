import React from "react";
import card from "../Images/user2.jpg";
import star from "../Images/noprofilepic.png"

export default function Card(props){
    return (
       <div className="card">
            <img src={props.img} alt="star" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="Star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span >
                <span className="gray">{props.country}</span>

            </div>
            <p>{props.title} </p>
            <p><span className="bold">From {props.price}$</span> / person </p>
       </div>
    )
} 