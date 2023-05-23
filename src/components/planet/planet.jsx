import React from "react";
import planet from "../../img/planet.svg";

import "../planet/planet.css";

function showPlanet () {
    const planet = document.querySelector(".planet");
    
        planet.classList.remove("spin");
        planet.classList.add("show");
 }
// ===============================================
// function showPlanet() {
//   let image = document.querySelector(".planet"),
//     even = true,
//     imageWidth = image.clientWidth;

//   image.onclick = function () {
//     if (even) {
//       this.style.width = imageWidth * 3 + "px";
//       even = false;
//     } else {
//       this.style.width = imageWidth + "px";
//       even = true;
//     }
//   };
// }
// ==========================================

const Planet = ()=> {
   
  return (
    <>
      <img
        src={planet}
        alt="planet"
        className="planet  spin"
        onClick={()=>{showPlanet()}}
      />
      
    </>
  );

}

export default Planet;