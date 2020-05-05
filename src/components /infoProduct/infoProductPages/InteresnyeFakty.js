import React, {Component} from "react";
import InfoProduct from "../index";


export const InteresnyeFakty = () => {
    return (
        <div className="info-page">
            <div className="article-text">
                <div className="sidebar-article">
                    <ul className="sideMenu-list">
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="#!">Каталог</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="#!">О нас</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="#!">Оплата и
                                доставка</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="#!">Обмен и
                                возврат</a></div>
                        </li>
                        <li className="sideMenu-i">
                            <div className="sideMenu-t"><a href="#!">Контактная
                                информация</a></div>
                        </li>

                    </ul>
                </div>
                <div className="main-content">
                    <h1 className="main-h">Интересные факты про электровелосипед</h1>
                    <p>Если вы хоть раз ездили на троллейбусе, метро или трамвае, то знаете, насколько быстро и плавно
                        они
                        разгоняются. То же самое с электровелосипедами — обычный однокиловатник по динамике разгона не
                        уступит
                        большинству городских автомобилей. Максимальная скорость велосипеда зависит от мощности
                        электродвигателя
                        и аккумулятора, и составляет от спокойных 30 до внушительных 100 км/ч и даже выше. Однако стоит
                        помнить,
                        что управление на скоростях свыше 40-50 км/ч требует определенного мастерства.</p>

                    <p>Наиболее популярным вариантом по динамике, скорости и пробегу являются электровелосипеды
                        мощностью
                        500-1000 Ватт, а если самостоятельно переоборудовать обычный велосипед в электрический, то он
                        получится
                        еще и оптимальным по стоимости.</p>

                    <p>Для сравнения проведем аналогию — среднестатистический подготовленный велосипедист может
                        производить от
                        100 до 200 Ватт энергии на длительном промежутке и до 300 Ватт на коротких участках. То есть
                        приобретая
                        набор даже мощностью 350 Ватт вы получаете прибавку плюс один супер спортивный велосипедист к
                        мощности
                        своего велосипеда.</p>
                </div>
            </div>
            <InfoProduct/>
        </div>
    )
};

export default InteresnyeFakty