import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Home from "./Home";
import {NavLink} from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {catalog} from "../sidebar/constant";
import BasketProduct from "../basketProduct/BascketProduct";

const Breadcrumbs = withBreadcrumbs()(({breadcrumbs}) => (
    <div className="breadcrumbs">
        {breadcrumbs.map(({breadcrumb, match}, index) => (
            <NavLink key={match.url} to={match.url || ""}>{breadcrumb}</NavLink>
        ))}
    </div>
));

class Layout extends Component {

    render() {
        return (
            <div className={`${"layout"} ${this.props.stateToggleClass ? "active" : ""}`}>
                <main>
                    <BasketProduct setCharacter={this.props.setCharacter} toggleClass={this.props.toggleClass} stateToggleClass={this.props.active}/>
                    <ScrollToTop/>
                    <Header toggleClass={this.props.toggleClass} />
                    <div className="breadcrumb">
                        <div className="container">
                            {(window.location.href) === 'http://localhost:3000/' ? "" : <Breadcrumbs/>}
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