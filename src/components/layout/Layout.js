import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
// import Home from "./Home";
import {NavLink} from "react-router-dom";
import ScrollToTop from "../include/ScrollToTop/ScrollToTop";
//import {catalog} from "../sidebar/constant";
import BasketProduct from "../basketProduct/BascketProduct";

const Breadcrumbs = withBreadcrumbs()(({breadcrumbs}) => (
    <div className={`${"breadcrumbs"} ${window.location.href === 'https://3.landing-test.net.ua/' ? "home-page" : ""}`}>
        {breadcrumbs.map(({breadcrumb, match}, index) => (
            <NavLink key={match.url} to={match.url || ""} >{breadcrumb}</NavLink>
        ))}
    </div>
));

class Layout extends Component {

    render() {
        return (
            <div className={`${"layout"} ${this.props.stateToggleClass ? "active" : ""}`}>
                <main>
                    <BasketProduct
                        basketList={this.props.basketList}
                        toggleClass={this.props.toggleClass}
                        stateToggleClass={this.props.active}
                        setCharacter={this.props.setCharacter}
                        deleteProduct={this.props.deleteProduct}
                        totalAmountSum={this.props.totalAmountSum}
                    />
                    <ScrollToTop/>
                    <Header
                        toggleClass={this.props.toggleClass}
                        basketList={this.props.basketList}
                    />
                    <div className="breadcrumb">
                        <div className="container">
                            <Breadcrumbs/>
                        </div>
                    </div>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        )
    }
}

export default Layout