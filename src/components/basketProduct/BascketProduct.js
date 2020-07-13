import React, {Component} from "react";
import ProductItem from './ProductItem';
import '../basketProduct/bascketProduct.css'
import {catalog} from "../sidebar/constant";

class BasketProduct extends Component {
    state = {
        counter: 1,
        finalSum: this.props.price,
        basketListProps: this.props.basketList,
        arrTotalAmount: [],
        totalPrice: []
    };

    increment = (id) => {
        //console.log('increment', id);
        this.setState({counter: this.state.counter + 1});
        const stateCounter = this.state.counter + 1;
        const sumPrice = this.props.basketList.map((item) => {
             return parseInt(item.price.replace(/\s+/g, ''), 10)
         })
         const sumPriceRes = (stateCounter * sumPrice);
        this.props.basketList.map(item => {
            if (item.id === id) {
                item.priceSumBasket = sumPriceRes
            }
            return item;
        })

    }

    decrement = (id) => {
        // console.log('decrement', id);
        this.setState({counter: Math.max(this.state.counter - 1, 1)});
        const sumPrice = this.props.basketList.map((item) => {
            return  item.priceSumBasket - parseInt(item.price.replace(/\s+/g, ''), 10)
        })
        this.props.basketList.map(item => {
            if (item.id === id) {
                item.priceSumBasket = sumPrice
            }
            return item;
        })
    }

    onChangeHandle = (event) => this.setState({counter: event.value});

    render() {
        console.log('basketListProps', this.state.basketListProps);
        const {basketList, setCharacter, toggleClass, deleteProduct} = this.props

        //----------------
        const sumPrice = this.props.basketList.map((item) => {
                return item.priceSumBasket
            }
        )
        console.log('sumPrice', sumPrice);
        const sum = sumPrice.length === 0 ? [0] : sumPrice.reduce(function (a, b) {
            return a + b;
        });
        console.log('sum', sum);
        //----------------
        const basketListItems = basketList.map((item) => {
            return (
                <ProductItem
                    key={item.id}
                    basketList={basketList}
                    deleteProduct={deleteProduct}
                    setCharacter={setCharacter}
                    toggleClass={toggleClass}

                    counter={this.state.counter}
                    increment={this.increment}
                    decrement={this.decrement}
                    onChangeHandle={this.onChangeHandle}

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
                                <span>Итого</span> {this.state.basketListProps.length === 0 ? 0 : sum} грн
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