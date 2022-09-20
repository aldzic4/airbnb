import React from "react";
import logo from '../Images/logo.png';
import '../index.css'


export default function Navbar() {
  return ( 
    <nav >
        <img className="nav--logo " src={logo} alt="Slika logo AIRBNB"/>
    </nav>
  )

}
