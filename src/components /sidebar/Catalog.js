import React, {Component} from "react";
import InfoProduct from "../infoProduct";
import {catalog, selectSort} from "../sidebar/constant"
//import SelectSort from '../sidebar/SelectSort';
import SelectRange from '../sidebar/SelectRange';
import SelectIcon from '../sidebar/SelectIcon';
import Select from "react-select";


class Catalog extends Component {
    state = {
        catalog,
        valueSort: {label: this.props, value: this.props},
        activeRange: false
    }

    toggleClass = () => {
        const active = this.state.activeRange;
        this.setState({
            activeRange: !active
        })
    };

    handleChange = valueSort => {
        if (valueSort.value == 0) {
            const byPopularityDate = this.state.catalog;
            const sortPopularityDate = byPopularityDate.sort((a, b) => a.id > b.id ? 1 : -1);
            this.setState({catalog: sortPopularityDate});
        }
        if (valueSort.value == 1) {
            const byPriceDate = this.state.catalog;
            const sortPriceDate = byPriceDate.sort((a, b) => a.price.toLowerCase() > b.price.toLowerCase() ? 1 : -1);
            this.setState({catalog: sortPriceDate});
        }
        if (valueSort.value == 2) {
            const byNameDate = this.state.catalog;
            const sortNameData = byNameDate.sort((a, b) => a.info > b.info ? 1 : -1);
            this.setState({catalog: sortNameData});
        }
    };

    render() {
        const {selectedOption} = this.state;

        return (
            <div className="info-page">
                <div className="article-text">
                    <div className="main-content">
                        <h1>Catalog</h1>
                        <div className="sortPanel">
                            <div className="filter">
                                <div className="filter-title">
                                    Фильтр
                                </div>
                                <div className="filterParams">
                                    <div className="wrap-icon">
                                        <div className="filter-icon">
                                            Иконки
                                        </div>

                                        <SelectIcon/>
                                    </div>
                                    <div className={`${"wrap-price"} ${this.state.activeRange ? "active" : ""}`}>
                                        <div className="filter-price-title"
                                             onClick={this.toggleClass}>
                                            Цены, грн
                                            <span></span>
                                        </div>
                                    </div>

                                    <SelectRange/>

                                </div>
                            </div>
                            <div className="sort">
                                <div className="filter-title-sort">
                                    Сортировка
                                </div>

                                <div className="sortList">
                                    <Select
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        options={selectSort}
                                        defaultValue={{label: "по популярности", value: 0}}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="catalog">
                            {catalog.map((item) =>
                                <div className="item-catalog" key={item.id}>
                                    <div className="catalog-product">
                                        <a href={item.link} className="link-product">
                                            <div className="catalog-img">
                                                <img
                                                    src={item.img} alt={item.alt}/>
                                            </div>
                                        </a>
                                        <div className="productSticker">
                                            <div className="productView">
                                                <div className="productSticker-item__promo"><p>РАСПРОДАЖА</p></div>
                                                <div className="productSticker-item__new"><p>НОВИНКА</p></div>
                                                <div className="productSticker-item__popular"><p>ХИТ</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalogCard-info">
                                        <div className="info-title">{item.info}</div>
                                        <div className="btn-product">
                                            <div className="info-price">{item.price}</div>
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
};

export default Catalog;