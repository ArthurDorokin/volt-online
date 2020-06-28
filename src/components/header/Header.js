import React, {Component} from "react";
import './header.css'
import {header} from "../header/constans"
import {NavLink} from "react-router-dom";

class Header extends Component {
    state = {
        lastScrollY: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const lastScrollY = window.scrollY;
        this.setState({ lastScrollY: lastScrollY })
    };

    render() {

        const {basketList} = this.props
        const basketListLength = basketList.length
        return (
            <div className={`${"header"} ${this.state.lastScrollY > 100 ? 'basket' : '' }`}>
                <div className="wrapper">
                    <div className="container">
                        <div className="header-info">
                            <div className="wrap">
                                <div className="logo">
                                    <NavLink to="/"><img src="/img/header/57812582766728.jpg" alt=""/></NavLink>
                                </div>
                                <div className="phone">
                                    <NavLink to="tel:044 000-00-00">044 000-00-00</NavLink>
                                    <NavLink to="tel:095 000-00-00">095 000-00-00</NavLink>
                                    <p>Перезвонить вам ?</p>
                                </div>
                            </div>
                            <div className="infoTime">
                                <div className="schedule">
                                    <p>График работы:</p>
                                    <p><strong>Будние:</strong> 10:00–19:00</p>
                                    <p><strong>Сб:</strong> 12:00–18:00</p>
                                </div>
                                <div className="block-cart">
                                    <div className="cart" onClick={() => this.props.toggleClass()}>
                                        <span className="countItem">{basketListLength}</span>
                                        <img src="/img/header/63007shoppingcart_109353.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-navigation">
                        <div className="container">
                            <ul>
                                {header.headerList.map((item) =>
                                    <li key={item.id}><NavLink to={item.link ? item.link : ''}>{item.name}</NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header