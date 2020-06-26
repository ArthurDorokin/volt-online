import React, {Component} from "react";
import '../basketProduct/bascketProduct.css'
import {NavLink} from "react-router-dom";

class ProductItem extends Component {
    state = {
        counter: 1
    }

    increment = () => this.setState({counter: this.state.counter + 1});

    decrement = () => this.setState({counter: Math.max(this.state.counter - 1, 1)});

    onChangeHandle = (event) => this.setState({counter: event.value});

    render() {
        const {id, link, img, alt, info, price} = this.props
        return (
            <div key={id} className="product-item">
                <div className="block-left">
                    <div className="img" onClick={() => this.props.setCharacter(id)}>
                        <NavLink to={link} onClick={() => this.props.toggleClass()}>
                            <img src={img} alt={alt}/>
                        </NavLink>
                    </div>
                    <div className="description">
                        <div className="title-product" onClick={() => this.props.setCharacter(id)}>
                            <NavLink to={link} onClick={() => this.props.toggleClass()}>
                                {info}
                            </NavLink>
                        </div>
                        <div className="price-product">{price} грн</div>
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
        )
    }


}

export default ProductItem

