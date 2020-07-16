import React, {Component} from "react";
import ProductItem from './ProductItem';
import {NavLink} from "react-router-dom";
import '../basketProduct/bascketProduct.css'

class BasketProduct extends Component {
    state = {
        counter: 1,
        finalSum: this.props.price,
        arrTotalAmount: [],
        totalPrice: []
    };

    increment = (id) => {
        this.props.basketList.map(item => {
            const sumPrice = parseInt(item.price.replace(/\s+/g, ''), 10)
            if (item.id === id) {
                item.counterBasket += 1
                item.priceSumBasket =  sumPrice * item.counterBasket;
            }
            return item;
        })
    }

    decrement = (id) => {
        this.props.basketList.map(item => {
            const sumPrice = parseInt(item.price.replace(/\s+/g, ''), 10)
            if (item.id === id) {
                item.counterBasket -= 1
                item.priceSumBasket = item.priceSumBasket - sumPrice;
            }
            return item;
        })
    }

    Rerender = () => {
        this.forceUpdate()
    }

    render() {
        const {basketList, setCharacter, toggleClass, deleteProduct} = this.props

        const sumPrice = this.props.basketList.map((item) => {
                return item.priceSumBasket
        })
        const sum = sumPrice.length === 0 ? [0] : sumPrice.reduce(function (a, b) {
            return a + b;
        });

        const basketListItems = basketList.map((item) => {
            return (
                <ProductItem
                    key={item.id}
                    basketList={basketList}
                    deleteProduct={deleteProduct}
                    setCharacter={setCharacter}
                    toggleClass={toggleClass}
                    increment={this.increment}
                    decrement={this.decrement}
                    Rerender={this.Rerender}
                    inputChangedHandler={this.inputChangedHandler}
                    {...item}
                />
            )
        });

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
                        {/*component*/}
                        {basketListItems}
                        {/*component*/}
                    </div>
                    <div className="order-btn">
                        <div className="back-site-btn" onClick={() => this.props.toggleClass()}>
                            <p>Вернуться к покупкам</p>
                        </div>
                        <div className="final-price-btn">
                            <div className="finalPriceNum">
                                <span>Итого</span> {sum} грн
                            </div>
                            <div className="finalPriceBtn" onClick={() => this.props.toggleClass()}>
                                <NavLink to="/order">
                                    <button>Оформить заказ</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default BasketProduct