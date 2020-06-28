import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import ProductItem from './ProductItem';
import '../basketProduct/bascketProduct.css'


class BasketProduct extends Component {
    state = {
        totalAmountFinal: []
    }

    totalAmount = (totalAmountFinal) => {
        this.setState({ totalAmountFinal: totalAmountFinal })
    }

    render() {
        const {basketList, setCharacter, toggleClass, deleteProduct} = this.props

        const basketListItems = basketList.map((item) => {
            return (
                <ProductItem key={item.id}
                             deleteProduct={deleteProduct}
                             setCharacter={setCharacter}
                             totalAmount={this.totalAmount}
                             toggleClass={toggleClass}
                             {...item}
                />
            )
        });
        //{console.log(this.state.arrTotalAmount)}
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
                                <span>Итого</span> {this.state.totalAmountFinal.sum} грн
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