import React, {Component} from "react";
import './cardProduct.css'


class CardProduct extends Component {

    render() {
        const tabs = [
            {title: 'Доставка', listContent: 'London is the capital city of England.'},
            {title: 'Оплата', listContent: 'Paris is the capital of France.'},
            {title: 'Гарантия', listContent: 'Tokyo is the capital of Japan.'},
        ];
        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-cardProduct">
                        <div className="main-product">
                            <div className="img">
                                <img
                                    src="../img/content/elektroskeyt-gtf-jetskate-classic-one-edition-64377766348990_small4.png"
                                    alt="Электроскейт"/>
                            </div>
                            <div className="description">
                                <div className="title"><h2>Электроскейт Like.Bike Teens Skate</h2></div>
                                <div className="info-in-product">
                                    <div className="in-stock">В наличии</div>
                                    <div className="vendor-code">Артикул: <span>5rfw3a</span></div>
                                </div>
                                <div className="price">7 999 грн</div>
                                <div className="order">
                                    <div className="buy">Купить</div>
                                    <div className="quick-order">Быстрый заказ</div>
                                </div>
                                <div className="tabs-info-order">
                                    <div className="tabs">
                                        <div className="name active">Доставка</div>
                                        <div className="name">Оплата</div>
                                        <div className="name">Гарантия</div>
                                    </div>
                                    <div className="tab-name delivery active">
                                        <ul>
                                            <li>Новой почтой по Украине — 30 грн.</li>
                                            <li>Курьером к двери по Киеву — 40 грн.</li>
                                        </ul>
                                    </div>
                                    <div className="tab-name payment">
                                        <ul>
                                            <li>Наличными при получении.</li>
                                            <li>Кредитной картой в privat24, LiqPay.</li>
                                            <li>Через кассу или терминал самообслуживания Приватбанк.</li>
                                        </ul>
                                    </div>
                                    <div className="tab-name guarantee">
                                        <ul>
                                            <li>Гарантия от производителя 12 месяцев</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description-for-product">
                            <div className="about-product">
                                <h4>Описание</h4>
                                Диаметр колёс: 8' дюймов. Количество амортизаторов: Передний и задний. Вес: 12 кг.
                                Батарея: Li-ion 36V/8800 mAH. Мощность моторов: 350W. Нагрузка: до 100 кг. Скорость: до
                                30 км/ч. Влагозащита: IP54. Подсветка: LED фара. Материал рамы - Aluminium. Бортовой
                                компьютер, LCD-дисплей. Двойная тормозная система - Электрический и задний дисковый
                                тормоз, механический. Запас хода - до 25 км.
                            </div>
                            <div className="see-also">
                                <div className="item-product">
                                    <div className="catalog-product"><a
                                        href="/elektrovelosiped-oio-city-bike-elite-white/" className="link-product">
                                        <div className="catalog-img"><img
                                            src="../img/content/elektrovelosiped-oio-city-bike-elite-white-97933455367029_small4.jpg"
                                            alt="Электровелосипед"/></div>
                                    </a>
                                        <div className="productSticker">
                                            <div className="productView">
                                                <div className="productSticker-item__promo"><p>РАСПРОДАЖА</p></div>
                                                <div className="productSticker-item__new"><p>НОВИНКА</p></div>
                                                <div className="productSticker-item__popular"><p>ХИТ</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalogCard-info">
                                        <div className="info-title">Электровелосипед ZPAO SPORT’250</div>
                                        <div className="btn-product">
                                            <div className="info-price">18 600 грн</div>
                                            <div className="btn-buy">
                                                <button>Купить</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-product">
                                    <div className="catalog-product"><a
                                        href="/elektrovelosiped-oio-city-bike-elite-white/" className="link-product">
                                        <div className="catalog-img"><img
                                            src="../img/content/elektrovelosiped-oio-city-bike-elite-white-97933455367029_small4.jpg"
                                            alt="Электровелосипед"/></div>
                                    </a>
                                        <div className="productSticker">
                                            <div className="productView">
                                                <div className="productSticker-item__promo"><p>РАСПРОДАЖА</p></div>
                                                <div className="productSticker-item__new"><p>НОВИНКА</p></div>
                                                <div className="productSticker-item__popular"><p>ХИТ</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalogCard-info">
                                        <div className="info-title">Электровелосипед ZPAO SPORT’250</div>
                                        <div className="btn-product">
                                            <div className="info-price">18 600 грн</div>
                                            <div className="btn-buy">
                                                <button>Купить</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProduct