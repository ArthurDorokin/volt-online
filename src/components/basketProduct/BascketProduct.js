import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import ProductItem from './ProductItem';
import '../basketProduct/bascketProduct.css'


class BasketProduct extends Component {

    render() {
        const {basketList, setCharacter, toggleClass, deleteProduct} = this.props

        const basketListItems = basketList.map((item) => {
            return (
                <ProductItem key={item.id}
                             deleteProduct={deleteProduct}
                             setCharacter={setCharacter}
                             toggleClass={toggleClass}
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
                        {basketListItems}
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