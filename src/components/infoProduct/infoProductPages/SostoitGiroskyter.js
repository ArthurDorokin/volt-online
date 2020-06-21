import React, {Component} from "react";
import InfoProduct from "../index";
import {NavLink} from "react-router-dom";

export const SostoitGiroskyter = () => {
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
                            <div className="sideMenu-t"><NavLink to="/oplata-i-dostavka/">Оплата и
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
                    <h1 className="main-h">Из чего состоит гироскутер?</h1>
                    <p>Данный агрегат состоит из нескольких ключевых элементов:<br/>
                        Два электрических мотора;<br/>
                        Система гироскопических датчиков;<br/>
                        Управляющее устройство, обрабатывающее всю поступающую с датчиков информацию;<br/>
                        Корпус гироскутера;<br/>
                        Литий-ионный аккумулятор.<br/>
                        В зависимости от модели в гироскутере могут присутствовать дополнительные устройства:
                        информационный
                        дисплей, пульт управления, модуль Bluetooth, динамики для воспроизведения музыки, осветительные
                        приборы
                        и другое!</p>
                </div>
            </div>
            <InfoProduct/>
        </div>
    )
};

export default SostoitGiroskyter