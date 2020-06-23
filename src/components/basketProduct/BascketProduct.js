import React, {Component} from "react";
import '../basketProduct/bascketProduct.css'

class BasketProduct extends Component {

    render() {

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
                </div>
            </div>
        )
    }

};

export default BasketProduct