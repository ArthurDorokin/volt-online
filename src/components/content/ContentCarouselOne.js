import React, {Component} from "react";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

export const ContentCarouselOne = ({carouselOneProps, setCharacter, setForBasket, wordReplacement}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            {carouselOneProps.map((item) =>
                <div className="item-product" key={item.id}>
                    <div className="catalog-product">
                        <NavLink to={item.link ? item.link : ''} onClick={() => setCharacter(item.id)} className="link-product">
                            <div className="catalog-img">
                                <img
                                    src={item.img} alt={item.alt}/>
                            </div>
                        </NavLink>
                        <div className="productSticker">
                            <div className="productView">
                                <div
                                    className={`${"productSticker-item__promo"} ${item.filterIcon.classFilter}`}>
                                    <p>{item.filterIcon.name}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="catalogCard-info">
                        <div className="info-title">{item.info}</div>
                        <div className="btn-product">
                            <div className="info-price">{item.price} грн</div>
                            <div className="btn-buy" onClick={() => setForBasket(item.id)}>
                                {/*<button>{item.buy}</button>*/}
                                <button onClick={() => wordReplacement(item.id)}>{item.id === 1 ? item.inBasket : item.buy}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Slider>
    )
};