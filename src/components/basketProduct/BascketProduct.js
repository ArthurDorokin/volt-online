import React, {Component} from "react";
import ProductItem from './ProductItem';
import '../basketProduct/bascketProduct.css'


class BasketProduct extends Component {
    state = {
        counter: 1,
        finalSum: this.props.price,
        basketListProps: this.props.basketList,
        arrTotalAmount: [],
        totalPrice: []
    };

    increment = () => {
        this.setState({counter: this.state.counter + 1});
        console.log('increment');
        //console.log('increment id', id);
        // const propsPrice = this.props.price;
        // const stateCounter = this.state.counter + 1;
        // const sum = (stateCounter * parseInt(propsPrice.replace(/\s+/g, ''),10));
        // this.setState({finalSum: sum});
    }

    decrement = () => {
        this.setState({counter: Math.max(this.state.counter - 1, 1)});
        console.log('decrement');
        //console.log('decrement id', id);
        // const propsPrice = this.props.price;
        // const countPrice = this.state.finalSum;
        // const minus = countPrice - parseInt(propsPrice.replace(/\s+/g, ''),10);
        // this.setState({finalSum: minus});
    }

    onChangeHandle = (event) => this.setState({counter: event.value});


    render() {
        //console.log(this.state.totalPrice);

        const {basketList, setCharacter, toggleClass, deleteProduct} = this.props

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