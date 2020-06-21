import React, {Component} from "react";
import "./sidebar.css"
import InfoProduct from "../infoProduct";
import {NavLink} from "react-router-dom";

export const Oplatadostavka = () => {
    return (
        <div className="info-page">
            <div className="article-text">
                <div className="sidebar-article">
                    <ul className="sideMenu-list">
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><NavLink to="/catalog/">Каталог</NavLink></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><NavLink to="/o-nas/">О нас</NavLink></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t active"><NavLink to="/oplata-i-dostavka/">Оплата и
                                доставка</NavLink></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><NavLink to="/obmen-i-vozvrat/">Обмен и
                                возврат</NavLink></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><NavLink to="/contacts/">Контактная
                                информация</NavLink></div>
                        </li>

                    </ul>
                </div>
                <div className="main-content">
                    <h1>Oplata dostavka</h1>
                </div>
            </div>
            <InfoProduct/>
        </div>
    )
};

export default Oplatadostavka;