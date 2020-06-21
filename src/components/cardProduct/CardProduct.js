import React, {Component} from "react";
import {catalog, selectProduct} from "../sidebar/constant";
import './cardProduct.css'
import {NavLink} from "react-router-dom";

class CardProduct extends Component {
    state = {
        tabIndex: 0
    }
    render() {
       const {stateProduct} = this.props
        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-cardProduct">
                        <div className="main-product">
                            <div className="img">
                                <img src={stateProduct.img} alt={stateProduct.alt}/>
                            </div>
                            <div className="description">
                                <div className="title"><h2>{stateProduct.info}</h2></div>
                                <div className="info-in-product">
                                    <div className="in-stock">В наличии</div>
                                    <div className="vendor-code">Артикул: <span>5rfw3a</span></div>
                                </div>
                                <div className="price">{stateProduct.price} грн</div>
                                <div className="order">
                                    <div className="buy">{stateProduct.buy}</div>
                                    <div className="quick-order">Быстрый заказ</div>
                                </div>
                                <div className="tabs-info-order">
                                    <div className="tabs">
                                        <div className={`${"name"} ${this.state.tabIndex === 0 ? `${"active"}` : null}`}
                                             onClick={() => this.setState({tabIndex: 0})}>Доставка
                                        </div>
                                        <div className={`${"name"} ${this.state.tabIndex === 1 ? `${"active"}` : null}`}
                                             onClick={() => this.setState({tabIndex: 1})}>Оплата
                                        </div>
                                        <div className={`${"name"} ${this.state.tabIndex === 2 ? `${"active"}` : null}`}
                                             onClick={() => this.setState({tabIndex: 2})}>Гарантия
                                        </div>
                                    </div>
                                    <div
                                        className={`${"tab-name"} ${this.state.tabIndex === 0 ? `${"active"}` : null}`}>
                                        <ul>
                                            <li>Новой почтой по Украине — 30 грн.</li>
                                            <li>Курьером к двери по Киеву — 40 грн.</li>
                                        </ul>
                                    </div>
                                    <div
                                        className={`${"tab-name"} ${this.state.tabIndex === 1 ? `${"active"}` : null}`}>
                                        <ul>
                                            <li>Наличными при получении.</li>
                                            <li>Кредитной картой в privat24, LiqPay.</li>
                                            <li>Через кассу или терминал самообслуживания Приватбанк.</li>
                                        </ul>
                                    </div>
                                    <div
                                        className={`${"tab-name"} ${this.state.tabIndex === 2 ? `${"active"}` : null}`}>
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
                                Электроскейт GTF Jetskate Classic One Edition с электродвигателем — это легкий,
                                стильный, качественный электрический скейтборд. Интересная альтернатива обычному
                                скейтборду, которая создана для энергичных и активных молодых людей.
                                <h4>Особености</h4>
                                <ul>
                                    <li>Пульт дистанционного управления</li>
                                    <li>Колеса диаметром 3" позволяют не беспокоиться о неровной дороге и даже лежачих
                                        полицейских
                                    </li>
                                    <li>Мотор мощностью 180 Вт тянет даже в гору с наклоном 10 градусов</li>
                                    <li>Размер деки максимально удобен для быстрой езды и хорошей управляемости</li>
                                </ul>
                            </div>
                            <div className="see-also">
                                <h4>Смотрите также</h4>
                                <div className="wrap-also">
                                    {catalog.filter((item) => item.typeProduct === stateProduct.typeProduct).map((item) =>
                                        <div className="item-product" key={item.id}>
                                            <div className="catalog-product">
                                                <NavLink to={item.link ? item.link : ''} className="link-product">
                                                    <div className="catalog-img">
                                                        <img
                                                            src={item.img} alt={item.alt}/>
                                                    </div>
                                                </NavLink>
                                                <div className="productSticker">
                                                    <div className="productView">
                                                        <div
                                                            className={`${"productSticker-item__promo"} ${item.filterIcon.classFilter}`}>
                                                            <p>{item.filterIcon.name}</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="catalogCard-info">
                                                <div className="info-title">{item.info}</div>
                                                <div className="btn-product">
                                                    <div className="info-price">{item.price} грн</div>
                                                    <div className="btn-buy">
                                                        <button>{item.buy}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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