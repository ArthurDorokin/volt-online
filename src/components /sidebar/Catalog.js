import React, {Component} from "react";
import InfoProduct from "../infoProduct";

export const Catalog = () => {
    return (
        <div className="info-page">
            <div className="article-text">
                <div className="sidebar-article">
                    <ul className="sideMenu-list">
                        <li className="sideMenu-i">
                            <div className="sideMenu-t active"><a href="/catalog/">Каталог</a></div>
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
                    <h1>Catalog</h1>
                </div>
            </div>
            <InfoProduct/>
        </div>
    )
};

export default Catalog;