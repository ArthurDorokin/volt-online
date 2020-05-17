import React, {Component} from "react";
import InfoProduct from "../infoProduct";
import {catalog} from "../sidebar/constant"
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const selectSort = [
    {value: 0, label: 'по популярности'},
    {value: 1, label: 'сначала дешевле'},
    {value: 2, label: 'по названию'},
];

const selectCheckbox = [
    {value: 0, label: "распродажа"},
    {value: 1, label: "новинка"},
    {value: 2, label: "хит"},
];

class Catalog extends Component {
    state = {
        valueSort: {label: this.props, value: this.props},
        valueCheckbox: {name: this.props, value: this.props},
        sliderValues: [9000, 15000],
        activeRange: false
    }

    toggleClass = () => {
        const active = this.state.activeRange;
        this.setState({
            activeRange: !active
        })
    };

    handleChange = valueSort => {
        this.setState({value: valueSort});
        console.log(`Option selected:`, valueSort);
    };


    handleChangeCheckbox = valueCheckbox => {
        this.setState({value: valueCheckbox});
        console.log(`select checkbox:`, valueCheckbox);
    };

    handleChange124 = sliderValues => {
        this.setState({ sliderValues });
    };
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
                                    {/*{sliderValues[0]} - {sliderValues[1]}*/}
                                    <div className="filter-price">

                                        <Range
                                            marks={{
                                                7899: `грн 7899`,
                                                23899: `грн 23899`
                                            }}
                                            min={7899}
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
                            {catalog.catalogItem.map((item) =>
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