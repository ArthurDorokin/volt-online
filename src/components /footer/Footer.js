import React from "react";
import './footer.css'

const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="footerWrap">
                <div className="logo-footer">
                    <img src="../img/header/57812582766728.jpg" alt=""/>
                    <p>© 2014—2020
                        Демонстрационный интернет-магазин</p>
                </div>
                <div className="catalog-footer">
                    <h5>Каталог</h5>
                    <ul>
                        <li><a href="#">Электроскейты</a></li>
                        <li><a href="#">Электросамокаты</a></li>
                        <li><a href="#">Электровелосипеды</a></li>
                        <li><a href="#">Моноколеса</a></li>
                        <li><a href="#">Гироскутеры</a></li>
                        <li><a href="#">Сегвеи</a></li>
                    </ul>
                </div>
                <div className="client-footer">
                    <h5>Клиентам</h5>
                    <ul>
                        <li><a href="#">Вход в личный кабинет</a></li>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Оплата и доставка</a></li>
                        <li><a href="#">Обмен и возврат</a></li>
                        <li><a href="#">Контактная информация</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                </div>
                <div className="contact-info-footer">
                    <h5>Клиентам</h5>
                    <ul>
                        <li><a href="#">Контактная информация</a></li>
                        <li><a href="#">044 000-00-00</a></li>
                        <li><a href="#">095 000-00-00</a></li>
                        <li><a href="#">Перезвонить вам?</a></li>
                        <li><a href="#">Киев, ул. Крещатик</a></li>
                        <li><a href="#">Карта проезда</a></li>
                        <li><a href="#">Эл. почта: mail@mail.com</a></li>
                        <li><a href="#">Skype: skypelia#</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Footer