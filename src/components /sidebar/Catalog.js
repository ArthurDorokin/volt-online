import React, {Component} from "react";
import InfoProduct from "../infoProduct";
import {catalog, selectCheckbox, selectSort} from "../sidebar/constant"
//import SelectSort from '../sidebar/SelectSort';
//import SelectRange from '../sidebar/SelectRange';
//import SelectIcon from '../sidebar/SelectIcon';
import Select from "react-select";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);

class Catalog extends Component {
    state = {
        default: {
            catalog
        },
        catalog,
        valueSort: {label: this.props, value: this.props},
        valueCheckbox: {name: this.props, value: this.props},
        sliderValues: [12000, 15000],
        activeRange: false
    }

    handleChange124 = sliderValues => {
        this.setState({sliderValues});
    };

    toggleClass = () => {
        const active = this.state.activeRange;
        this.setState({
            activeRange: !active
        })
    };

    removeClassRange = () => {
        const active = this.state.activeRange;
        this.setState({
            activeRange: !active
        })
    };

    addStateNumRange = () => {
        const numRange = this.state.sliderValues;
        const byFilterIconData = this.state.default.catalog;
        const numRangeFilterData = byFilterIconData.filter((item) => (numRange[0] <= item.price.replace(/\s/g, '') && item.price.replace(/\s/g, '') <= numRange[1]));
        console.log(numRangeFilterData);
        this.setState({catalog: numRangeFilterData});

        const active = this.state.activeRange;
        this.setState({
            activeRange: !active
        })
    };
    //<----------
    handleChange = valueSort => {
        if (valueSort.value == 0) {
            const byPopularityDate = this.state.catalog;
            const sortPopularityDate = byPopularityDate.sort((a, b) => a.id > b.id ? 1 : -1);
            this.setState({catalog: sortPopularityDate});
        }
        if (valueSort.value == 1) {
            const byPriceDate = this.state.catalog;
            const sortPriceDate = byPriceDate.sort((a, b) => a.price > b.price ? 1 : -1);
            this.setState({catalog: sortPriceDate});
        }
        if (valueSort.value == 2) {
            const byNameDate = this.state.catalog;
            const sortNameData = byNameDate.sort((a, b) => a.info > b.info ? 1 : -1);
            this.setState({catalog: sortNameData});
        }
    };
    //---------->

    //<----------
    handleChangeCheckbox = valueCheckbox => {
        this.setState({catalog});
        if (valueCheckbox.value == 0) {
            const byFilterIconData = this.state.default.catalog;
            const sortFilterIconDataOne = byFilterIconData.filter((item) => item.filterIcon.val === 0);
            this.setState({catalog: sortFilterIconDataOne});
        }
        if (valueCheckbox.value == 1) {
            const byFilterIconData = this.state.default.catalog;
            const sortFilterIconDataTwo = byFilterIconData.filter((item) => item.filterIcon.val === 1);
            this.setState({catalog: sortFilterIconDataTwo});
        }
        if (valueCheckbox.value == 2) {
            const byFilterIconData = this.state.default.catalog;
            const sortFilterIconDataThree = byFilterIconData.filter((item) => item.filterIcon.val === 2);
            this.setState({catalog: sortFilterIconDataThree});
        }
        if (valueCheckbox.value == 3) {
            const byRestIconData = this.state.default.catalog;
            this.setState({catalog: byRestIconData});
        }
    };

    //---------->
    render() {
        const {selectedOption, selectCheck, sliderValues} = this.state;

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
                                        <div className="filter-iconList">
                                            <Select
                                                value={selectCheck}
                                                onChange={this.handleChangeCheckbox}
                                                options={selectCheckbox}
                                                defaultValue={{value: 3, label: 'все'}}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${"wrap-price"} ${this.state.activeRange ? "active" : ""}`}>
                                        <div className="filter-price-title"
                                             onClick={this.toggleClass}>
                                            Цены, грн
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="filter-price">
                                        <div className="controlPanel">
                                            <div className="btnPanelOk"
                                                 onClick={this.addStateNumRange}>
                                                ok
                                            </div>
                                            {/*{console.log(sliderValues[0])}*/}
                                            {/*{console.log(sliderValues[1])}*/}
                                            <div className={`${"btnClose"} ${this.state.activeRange ? "active" : ""}`}
                                                 onClick={this.removeClassRange}>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="wrapRange">
                                            <Range
                                                marks={{
                                                    10999: `грн 10999`,
                                                    23899: `грн 23899`
                                                }}
                                                min={10999}
                                                max={23899}
                                                defaultValue={sliderValues}
                                                onChange={this.handleChange124}
                                                tipFormatter={value => `${value}`}
                                                tipProps={{
                                                    placement: "top",
                                                    visible: true
                                                }}
                                            />
                                        </div>
                                    </div>

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
                            {this.state.catalog.map((item) =>
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
                                                <div
                                                    className={`${"productSticker-item__promo"} ${item.filterIcon.classFilter}`}>
                                                    <p>{item.filterIcon.name}</p></div>
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