import React, {Component} from "react";
import InfoProduct from "../index";


export const ElektrosamokatPrintsip = () => {
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
                    <h1 className="main-h">Электросамокат. Принцип работы</h1>
                    <p>Принцип работы заключается в следующем:</p>

                    <p>Источником питания служит аккумулятор. В зависимости от типа устройства и мощности заряда,
                        электрический
                        самокат может ездить на расстояния от 30 до 50 км. Есть модели транспорта, где предусмотрен
                        переход с
                        электрической на бензиновую тягу, путем переключения рычага акселератора на руле. Таким образом,
                        производители снизили риск непредвиденной остановки. Можно иметь под рукой и запасной
                        аккумулятор,
                        который в пути легко заменить.</p>

                    <p>В конструкции самоката, рядом с осью располагают мотор и редуктор, за счет которых и
                        осуществляется
                        движение транспорта. Они передают крутящийся момент на переднее колесо, а рабочее напряжение
                        достигает
                        мотора через провода. В целях безопасности, двигатель и редуктор заключаются в специальный
                        герметичный
                        короб. У данной конструкции имеется свое название – мотор-колесо. Так как такой элемент имеет
                        большую
                        массу, нежели заднее колесо, то переднюю вилку усиливают и обустраивают амортизатор. Особенно,
                        это
                        касается взрослых моделей.</p>

                    <p>Благодаря такой конструкции и механизированности, электрические самокаты очень удобны и безопасны
                        в
                        эксплуатации.</p>
                </div>
            </div>
            <InfoProduct/>
        </div>
    )
};

export default ElektrosamokatPrintsip