import React, {Component} from "react";
import ProductItem from './ProductItem';
import '../basketProduct/bascketProduct.css'


class BasketProduct extends Component {
    state = {
        arrTotalAmount: [],
        totalPrice: ''
    };

    totalPrice = (totalPrice) => {
        this.setState({totalPrice})

        // this.state.arrTotalAmount.map((item) => {
        //     console.log(item)
        // })
    };

    render() {
        const {basketList, setCharacter, toggleClass, deleteProduct, totalAmountSum} = this.props

        const sumPrice = this.props.basketList.map((item) =>
            {return parseInt(item.price.replace(/\s+/g, ''),10)}
        )
        const sum = sumPrice.length === 0 ? [0] : sumPrice.reduce(function(a, b) {
            return a + b;
        });

        const basketListItems = basketList.map((item) => {
            return (
                <ProductItem key={item.id}
                             basketList={basketList}
                             deleteProduct={deleteProduct}
                             setCharacter={setCharacter}
                             toggleClass={toggleClass}
                             totalPrice={this.totalPrice}
                             sumPrice={sumPrice}
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