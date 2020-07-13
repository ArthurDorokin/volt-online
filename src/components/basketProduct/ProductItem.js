import React, {Component} from "react";
import '../basketProduct/bascketProduct.css'
import {NavLink} from "react-router-dom";

class ProductItem extends Component {

    render() {
        const {id, link, img, alt, info, price, priceSumBasket} = this.props

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
                    <div className="delete" onClick={() => this.props.deleteProduct(id)}>
                        <img src="/img/baskets.png" alt=""/>
                    </div>
                    <div className="quantity">
                        <div className="quan">
                            <span onClick={() => this.props.decrement(id)} className={this.props.counter === 1 ? 'off' : "on"}>-</span>
                            <input type="text" value={this.props.counter} onChange={this.props.onChangeHandle}/>
                            <span onClick={() => this.props.increment(id)}>+</span>
                        </div>
                    </div>
                    <div className="cost">{priceSumBasket} грн</div>
                    {/*<div className="cost">{price} грн</div>*/}
                </div>
            </div>

        )
    }


}

export default ProductItem

