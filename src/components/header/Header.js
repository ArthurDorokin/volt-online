import React from "react";
import './header.css'
import {header} from "../header/constans"
import {NavLink} from "react-router-dom";

const Header = () => (
    <div className="header">
        <div className="wrapper">
            <div className="container">
                <div className="header-info">
                    <div className="wrap">
                        <div className="logo">
                            <NavLink to="/"><img src="../img/header/57812582766728.jpg" alt=""/></NavLink>
                        </div>
                        <div className="phone">
                            <NavLink to="tel:044 000-00-00">044 000-00-00</NavLink>
                            <NavLink to="tel:095 000-00-00">095 000-00-00</NavLink>
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
                            <li key={item.id}><NavLink to={item.link ? item.link : ''}>{item.name}</NavLink></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    </div>
);

export default Header