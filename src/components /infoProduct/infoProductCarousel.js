import React, {Component} from "react";
import Slider from "react-slick";

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
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img src="../img/infoProduct/chto-takoe-sigvey-75570803612318_small.jpg" alt=""/>
                    <span>15 июля 2019</span>
                    <p>Из чего состоит гироскутер?</p>
                </a>
            </div>
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img src="../img/infoProduct/elektrosamokat.-printsip-raboty-38929997741016_small.jpg"
                         alt=""/>
                    <span>15 июля 2019</span>
                    <p>Электросамокат. Принцип работы</p>
                </a>
            </div>
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img src="../img/infoProduct/f6f6f644-49297480808130_small.jpg" alt=""/>
                    <span>15 июля 2019</span>
                    <p>Интересные факты про электровелосипед</p>
                </a>
            </div>
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img
                        src="../img/infoProduct/interesnye-fakty-pro-elektrovelosiped-68516127179010_small.jpg"
                        alt=""/>
                    <span>15 июля 2019</span>
                    <p>Что такое Сигвей?</p>
                </a>
            </div>
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img
                        src="../img/infoProduct/kak-nauchitsya-katatsya-na-monokolese-90249728819092_small.jpg"
                        alt=""/>
                    <span>15 июля 2019</span>
                    <p>Скорость моноколеса</p>
                </a>
            </div>
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img src="../img/infoProduct/vidy-elektrosamokatov-56054571866431_small.jpg" alt=""/>
                    <span>15 июля 2019</span>
                    <p>Виды электросамокатов</p>
                </a>
            </div>
            <div className="infoProductСarousel-item">
                <a href="#">
                    <img src="../img/infoProduct/skorost-monokolesa-29521010239764_small.jpg" alt=""/>
                    <span>15 июля 2019</span>
                    <p>Скорость моноколеса</p>
                </a>
            </div>
        </Slider>
    )
};
