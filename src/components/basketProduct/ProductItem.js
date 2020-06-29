import React, {Component} from "react";
import '../basketProduct/bascketProduct.css'
import {NavLink} from "react-router-dom";

class ProductItem extends Component {
    state = {
        counter: 1,
        finalSum: this.props.price,
        arrTotalAmount: [],
        totalAmountFinal: []
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
        const propsPrice = this.props.price;
        const stateCounter = this.state.counter + 1;
        const sum = (stateCounter * parseInt(propsPrice.replace(/\s+/g, ''),10));
        this.setState({finalSum: sum});

        //for component basketProduct

        const arrTotalAmount = this.state.arrTotalAmount;
        arrTotalAmount.push({"id": this.state.counter - 1, "sum": sum});
        this.state.arrTotalAmount.map((item) => {
           this.setState({totalAmountFinal: item});
            this.props.totalAmount(item);
        })
    }

    decrement = () => {
        this.setState({counter: Math.max(this.state.counter - 1, 1)});
        const propsPrice = this.props.price;
        const countPrice = this.state.finalSum;
        const minus = countPrice - parseInt(propsPrice.replace(/\s+/g, ''),10);
        this.setState({finalSum: minus});

        //for component basketProduct

        const arrTotalAmount = this.state.arrTotalAmount;
        arrTotalAmount.push({"id": this.state.counter - 1, "sum": minus});
        this.state.arrTotalAmount.map((item) => {
            this.setState({totalAmountFinal: item});
            this.props.totalAmount(item);
        })
    }

    onChangeHandle = (event) => this.setState({counter: event.value});

    render() {

        // {console.log('finalSum render', this.state.finalSum)}
        //{console.log('arrTotalAmount', this.state.totalAmountFinal)}

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
                    <div className="delete" onClick={() => this.props.deleteProduct(id)}>
                        <img src="/img/baskets.png" alt=""/>
                    </div>
                    <div className="quantity">
                        <div className="quan">
                            <span onClick={this.decrement} className={this.state.counter === 1 ? 'off' : "on"}>-</span>
                            <input type="text" value={this.state.counter} onChange={this.onChangeHandle}/>
                            <span onClick={this.increment}>+</span>
                        </div>
                    </div>
                    <div className="cost">{this.state.finalSum} грн</div>
                </div>
            </div>

        )
    }


}

export default ProductItem

