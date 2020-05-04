import React from "react";
import './header.css'
import {header} from "../header/constans"
const Header = () => (
    <div className="header">

            <div className="wrapper">
                <div className="container">
                <div className="header-info">
                    <div className="wrap">
                        <div className="logo">
                            <img src="../img/header/57812582766728.jpg" alt=""/>
                        </div>
                        <div className="phone">
                            <a href="tel:044 000-00-00">044 000-00-00</a>
                            <a href="tel:095 000-00-00">095 000-00-00</a>
                            <p>Перезвонить вам ?</p>
                        </div>
                    </div>
                    <div className="infoTime">
                        <div className="schedule">
                            <p>График работы:</p>
                            <p><strong>Будние:</strong> 10:00–19:00</p>
                            <p><strong>Сб:</strong> 12:00–18:00</p>
                        </div>
                        <div className="cart">
                            <img src="../img/header/63007shoppingcart_109353.svg" alt=""/>
                        </div>
                    </div>
                </div>
                </div>

                <div className="header-navigation">
                    <div className="container">
                    <ul>
                        {header.headerList.map((item) =>
                            <li key={item.id}><a href={item.link}>{item.name}</a></li>
                        )}
                    </ul>
                </div>
                </div>
            </div>

    </div>
);

export default Header