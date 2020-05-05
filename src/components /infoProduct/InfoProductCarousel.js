import React, {Component} from "react";
import {infoProductCarousel} from '../infoProduct/constans.js';
import Slider from "react-slick";
import {NavLink} from 'react-router-dom'
export const InfoProductCarousel = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            {infoProductCarousel.infoCarousel.map((item) =>
                <div className="infoProductСarousel-item" key={item.id}>
                    <a href={item.link}>
                        <img src={item.img} alt={item.alt}/>
                        <span>{item.infoDate}</span>
                        <p>{item.description}</p>
                    </a>
                </div>
            )}
        </Slider>
    )
};
