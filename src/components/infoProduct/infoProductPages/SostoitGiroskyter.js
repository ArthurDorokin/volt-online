import React, {Component} from "react";
import InfoProduct from "../index";


export const SostoitGiroskyter = () => {
    return (
        <div className="info-page">
            <div className="article-text">
                <div className="sidebar-article">
                    <ul className="sideMenu-list">
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="/catalog/">Каталог</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="/o-nas/">О нас</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="/oplata-i-dostavka/">Оплата и
                                доставка</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="/obmen-i-vozvrat/">Обмен и
                                возврат</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="/contacts/">Контактная
                                информация</a></div>
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