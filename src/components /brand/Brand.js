import React from "react";
import './brand.css'

const Brand = () => (
    <div className="brand">
        <div className="container">
            <h2>Выбери свой траснпорт</h2>
            <h4>Подходи с умом к выбору электротранспорта</h4>
            <div className="wrapBrand">
                <div className="item-brand"><img src="../img/brand/53508345147055.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/airwheel-55959239942914.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/haibike-62043624330681.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/mijia-55441774294507.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/ninebot-16575698044570.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/segway-73042728411437.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/smart-balance-23882022779447.jpg" alt=""/></div>
                <div className="item-brand"><img src="../img/brand/xiaomi-65854573268282.jpg" alt=""/></div>
                <div className="btn-more-brand">
                    <span>Показать еще</span>
                </div>
            </div>
        </div>
    </div>
);

export default Brand