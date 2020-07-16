import React, {Component} from "react";
import Select from "react-select";
import InputMask from 'react-input-mask';
import "./orderPage.css"
import {NavLink} from "react-router-dom";

const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    })

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    })

    return valid;
}

class OrderPage extends Component {
    state = {
        name: null,
        tel: null,
        city: null,
        street: null,
        formErrors: {
            name: "",
            tel: "",
            city: "",
            street: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        name: ${this.state.name}
        tel: ${this.state.tel}
        city: ${this.state.city}
        street: ${this.state.street}
      `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = {...this.state.formErrors};

        switch (name) {
            case "name":
                formErrors.name =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "tel":
                formErrors.tel =
                    value.length < 17 ? "minimum 13 characaters required" : "";
                break;
            case "city":
                formErrors.city =
                    value.length < 4 ? "minimum 4 characaters required" : "";
                break;
            case "street":
                formErrors.street =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    };

    render() {
        const {formErrors} = this.state;

        const delivery = [
            {value: 0, label: 'Курьером по Киеву'},
            {value: 1, label: 'Новой почтой'},
            {value: 2, label: 'Укрпочта'}
        ]
        const payment = [
            {value: 0, label: 'Наличными'},
            {value: 1, label: 'Оплата при получении'}
        ]
        const sumPrice = this.props.basketListOrder.map((item) => {
            return item.priceSumBasket
        })
        const sum = sumPrice.length === 0 ? [0] : sumPrice.reduce(function (a, b) {
            return a + b;
        });
        return (

            <div className="orderPage">
                <div className="container">
                    <h1>OrderPage</h1>
                    <div className="wrap-block">
                        <div className="left-block">
                            <form onSubmit={this.handleSubmit} noValidate>
                                <div className="orderWrap">
                                    <div className="orderRecipient">
                                        <h3>Получатель заказа</h3>
                                    </div>
                                    <div className="name flex">
                                        <p>ФИО</p>
                                        <input type="text"
                                               className={formErrors.name.length > 0 ? "error" : null}
                                               noValidate
                                               name="name"
                                               onChange={this.handleChange}
                                        />
                                        {formErrors.name.length > 0 && (
                                            <span className="errorMessage">{formErrors.name}</span>
                                        )}
                                    </div>
                                    <div className="tel flex">
                                        <p>Телефон</p>
                                        <InputMask
                                            className={formErrors.tel.length > 0 ? "error" : null}
                                            mask="+3\8 999 999 99 99"
                                            noValidate
                                            maskChar=""
                                            value={this.state.value}
                                            name="tel"
                                            placeholder="+38 999 999 99 99"
                                            onChange={this.handleChange}
                                        />
                                        {formErrors.tel.length > 0 && (
                                            <span className="errorMessage">{formErrors.tel}</span>
                                        )}
                                    </div>
                                    <div className="city flex">
                                        <p>Город</p>
                                        <input id="city" type="text"
                                               className={formErrors.city.length > 0 ? "error" : null}
                                               noValidate
                                               name="city"
                                               onChange={this.handleChange}
                                        />
                                        {formErrors.city.length > 0 && (
                                            <span className="errorMessage">{formErrors.city}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="deliveryWrap">
                                    <div className="delivery">
                                        <h3><p>Доставка</p></h3>
                                        <div className="deliverySelect">
                                            <Select
                                                options={delivery}
                                                defaultValue={{value: 0, label: 'Курьером по Киеву'}}
                                            />
                                        </div>
                                    </div>
                                    <div className="street flex">
                                        <p>Адрес</p>
                                        <input type="text"
                                               className={formErrors.street.length > 0 ? "error" : null}
                                               noValidate
                                               name="street"
                                               onChange={this.handleChange}
                                        />
                                        {formErrors.street.length > 0 && (
                                            <span className="errorMessage">{formErrors.street}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="paymentWrap">
                                    <div className="payment">
                                        <h3><p>Оплата</p></h3>
                                        <div className="paymentSelect">
                                            <Select
                                                options={payment}
                                                defaultValue={{value: 0, label: 'Наличными'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn-order">Оформить заказ</button>
                            </form>
                        </div>
                        <div className="right-block">
                            <div className="wrapBasketBg _order">
                                <div className="basketProduct">
                                    <div className="product-item-wrap">
                                        {this.props.basketListOrder.map(item => (
                                            <div key={item.id} className="product-item">
                                                <div className="block-left">
                                                    <div className="img">
                                                        <NavLink to={item.link}>
                                                            <img src={item.img} alt={item.alt}/>
                                                        </NavLink>
                                                    </div>
                                                    <div className="description">
                                                        <div className="title-product">
                                                            <NavLink to={item.link}>
                                                                {item.info}
                                                            </NavLink>
                                                        </div>
                                                        <div className="price-product">{item.price} грн</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                    <div className="finalPriceNum">
                                        <span>Итого</span> {sum} грн
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderPage