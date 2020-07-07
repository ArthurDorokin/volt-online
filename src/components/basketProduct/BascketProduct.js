import React, {Component} from "react";
import ProductItem from './ProductItem';
import '../basketProduct/bascketProduct.css'


class BasketProduct extends Component {
    state = {
        counter: 1,
        finalSum: this.props.price,

    }

    // totalAmount = (totalAmountFinal) => {
    //     this.setState({ totalAmountFinal: totalAmountFinal })
    // }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
        const propsPrice = this.props.price;
        const stateCounter = this.state.counter + 1;
        const sum = (stateCounter * parseInt(propsPrice.replace(/\s+/g, ''), 10));
        this.setState({finalSum: sum});

        // //for component basketProduct
        //
        // const arrTotalAmount = this.state.arrTotalAmount;
        // arrTotalAmount.push({"id": this.state.counter - 1, "sum": sum});
        // this.state.arrTotalAmount.map((item) => {
        //    this.setState({totalAmountFinal: item});
        //     this.props.totalAmount(item);
        // })
    }

    decrement = () => {
        this.setState({counter: Math.max(this.state.counter - 1, 1)});
        const propsPrice = this.props.price;
        const countPrice = this.state.finalSum;
        const minus = countPrice - parseInt(propsPrice.replace(/\s+/g, ''), 10);
        this.setState({finalSum: minus});

        // //for component basketProduct
        //
        // const arrTotalAmount = this.state.arrTotalAmount;
        // arrTotalAmount.push({"id": this.state.counter - 1, "sum": minus});
        // this.state.arrTotalAmount.map((item) => {
        //     this.setState({totalAmountFinal: item});
        //     this.props.totalAmount(item);
        // })
    }

    onChangeHandle = (event) => this.setState({counter: event.value});

    render() {

        const {basketList, setCharacter, toggleClass, deleteProduct, totalAmountSum} = this.props

        const basketListItems = basketList.map((item) => {

            return (
                <ProductItem key={item.id}
                             deleteProduct={deleteProduct}
                             setCharacter={setCharacter}
                             totalAmount={this.totalAmount}
                             toggleClass={toggleClass}
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
                                <span>Итого</span> {totalAmountSum} грн
                                {/*<span>Итого</span> {this.state.totalAmountFinal.sum} грн*/}
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