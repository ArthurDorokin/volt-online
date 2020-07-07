import React, {Component} from "react";
import SortPanel from "../../sidebar/SortPanel";
import {NavLink} from "react-router-dom";

class Skeyt extends Component {
    state = {
        catalog: this.props.catalog
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
            <div className="main-catalogs">
                <div className="container">
                    <h1>Электроскейты</h1>
                    <SortPanel
                        addStateNumRange={this.addStateNumRange}
                        handleChangeCheckbox={this.handleChangeCheckbox}
                        handleChange={this.handleChange}
                    />
                    <div className="wrap-product">
                        <div className="products">
                            <div className="catalog">
                                {this.state.catalog.filter((item) => item.typeProduct === 2).map((item) =>
                                    <div className="item-catalog" key={item.id}>
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
                                                <div className={`${"btn-buy"} ${item.idBasket === true ? 'inBasket' : 'noBasket'}`} onClick={() => this.props.setForBasket(item.id)}>
                                                    <button>
                                                        {item.idBasket === true ? item.inBasket : item.buy}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skeyt;