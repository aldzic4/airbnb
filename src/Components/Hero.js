import React from "react";
import grid from "../Images/grid.png"
import '../index.css'

export default function Hero(){
    return(
        <section className="hero">
            <img src={grid} alt="Grid photo" className="hero--photo" />
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique interactive activities led by one of a kind hosts all without leaving home.</p>
        </section>
    )
}