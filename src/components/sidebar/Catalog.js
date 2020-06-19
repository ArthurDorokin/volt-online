import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import InfoProduct from "../infoProduct";
import {catalog} from "../sidebar/constant"
import 'rc-slider/assets/index.css';
import SortPanel from "./SortPanel";

class Catalog extends Component {
    state = {
        catalog
    };

    addStateNumRange = (catalog) => {
        this.setState({catalog})
    };

    handleChangeCheckbox = (catalog) => {
        this.setState({catalog})
    };

    handleChange = (catalog) => {
        this.setState({catalog})
    };


    render() {
        return (
            <div className="info-page">
                <div className="article-text">
                    <div className="main-content">
                        <h1>Catalog</h1>
                        <SortPanel
                            addStateNumRange={this.addStateNumRange}
                            handleChangeCheckbox={this.handleChangeCheckbox}
                            handleChange={this.handleChange}
                        />
                        <div className="catalog">
                            {this.state.catalog.map((item) =>
                                <div className="item-catalog"
                                     key={item.id}>
                                    <div className="catalog-product">
                                        <NavLink to={item.link ? item.link : ''} onClick={() => this.props.setCharacter(item.id)} className="link-product">
                                            <div className="catalog-img">
                                                <img
                                                    src={item.img} alt={item.alt}/>
                                            </div>
                                        </NavLink>
                                        <div className="productSticker">
                                            <div className="productView">
                                                <div
                                                    className={`${"productSticker-item__promo"} ${item.filterIcon.classFilter}`}>
                                                    <p>{item.filterIcon.name}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalogCard-info">
                                        <div className="info-title">{item.info}</div>
                                        <div className="btn-product">
                                            <div className="info-price">{item.price} грн</div>
                                            <div className="btn-buy">
                                                <button>{item.buy}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <InfoProduct/>
            </div>
        )
    }
}

export default Catalog;