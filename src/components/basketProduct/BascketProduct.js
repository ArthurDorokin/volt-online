import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import '../basketProduct/bascketProduct.css'

class BasketProduct extends Component {
    state = {
        counter: 1
    }

    increment = () => this.setState({counter: this.state.counter + 1});

    decrement = () => this.setState({counter: Math.max(this.state.counter - 1, 1)});

    onChangeHandle = (event) => this.setState({counter: event.value});

    render() {
        const {basketList} = this.props

        return (
            <div className="wrapBasketBg">
                <div className="basketProduct">
                    <div className="title">
                        <div className="wrap">
                            <h2>Корзина</h2>
                            <div className="close" onClick={() => this.props.toggleClass()}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="product-item-wrap">
                        {basketList.map((item) =>
                            <div key={item.id} className="product-item">
                                <div className="block-left">
                                    <div className="img" onClick={() => this.props.setCharacter(item.id)}>
                                        <NavLink to={item.link} onClick={() => this.props.toggleClass()}>
                                            <img src={item.img} alt={item.alt} />
                                        </NavLink>
                                    </div>
                                    <div className="description">
                                        <div className="title-product" onClick={() => this.props.setCharacter(item.id)}>
                                            <NavLink to={item.link} onClick={() => this.props.toggleClass()}>
                                                {item.info}
                                            </NavLink>
                                        </div>
                                        <div className="price-product">{item.price} грн</div>
                                    </div>
                                </div>
                                <div className="block-right">
                                    <div className="quantity">
                                        <div className="quan">
                                            <span onClick={this.decrement}>-</span>
                                            <input type="text" value={this.state.counter} onChange={this.onChangeHandle}/>
                                            <span onClick={this.increment}>+</span>
                                        </div>
                                    </div>
                                    <div className="cost">12 222</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="order-btn">
                        <div className="back-site-btn" onClick={() => this.props.toggleClass()}>
                            <p>Вернуться к покупкам</p>
                        </div>
                        <div className="final-price-btn">
                            <div className="finalPriceNum">
                                <span>Итого</span> 18 889 грн
                            </div>
                            <div className="finalPriceBtn">
                                <button>Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default BasketProduct