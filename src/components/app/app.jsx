import React, { Component } from 'react';
// import planet from "../../img/planet.svg";
import Star from '../star/star';
import Planet from '../planet/planet';
import Header from '../header/header';
import Title from '../title/title';
import Arrow from '../arrow/arrow';
import Content from '../content/content';


import "../app/app.css";



export default class App extends Component {

    // click = () => {
    
    //     const planet1 = document.querySelector(".planet")
    //     const planet2 = document.querySelector(".planet2")
    //     planet1.classList.add("hiden");
    //     planet2.classList.remove("hiden");
    // }

    render() {
        return (
            <>
            <div className='space'>
             <Header></Header>   
             <Title></Title>
             <Planet ></Planet>
            <Star></Star>
            <Arrow></Arrow>
            <Content></Content>
            </div>
            </>
        )
    }
}

