import React from "react";
import {catalog, client, contactInfo} from '../footer/constans.js';
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
                        {catalog.catalogList.map((item) =>
                            <li key={item.id}><a href={item.link}>{item.name}</a></li>
                        )}
                    </ul>
                </div>
                <div className="client-footer">
                    <h5>Клиентам</h5>
                    <ul>
                        {client.clientList.map((item) =>
                            <li key={item.id}><a href={item.link}>{item.name}</a></li>
                        )}
                    </ul>
                </div>
                <div className="contact-info-footer">
                    <h5>Контактная информация</h5>
                    <ul>
                        {contactInfo.contactInfoList.map((item) =>
                            <li key={item.id}><a href={item.link}>{item.name}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Footer