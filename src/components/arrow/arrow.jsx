import React from "react";
import arrow from "../../img/arrow.svg";

import "../arrow/arrow.css";

function arrowClick (){
    const arrow = document.querySelector(".arrow");
    const planet = document.querySelector(".planet");
    const title = document.querySelector(".title-box");
    const foto = document.querySelector(".foto");
    const text = document.querySelector(".text")

    planet.classList.remove("spin");
    planet.classList.add("move");

    title.classList.remove("show-title");
    title.classList.add("depart");

    foto.classList.add("foto-mov");
    text.classList.add("text-mov");

    arrow.classList.remove("bounce");
}


const Arrow = ()=> {
    return (
        <>
        <button type="button" className="arrow bounce" onClick={()=>{arrowClick()}}>
        <img src={arrow} alt="arrow"/>
        </button>
        </>
    )
}

export default Arrow