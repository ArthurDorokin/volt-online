import React, {Component} from "react";
import InfoProduct from "../infoProduct";
import {catalog} from "../sidebar/constant"
import 'rc-slider/assets/index.css';
import SortPanel from "./SortPanel";

class Catalog extends Component {
    state = {
        catalog,
        selectProduct: ''
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


    //take the value of the card -->
    onCharSelected = (id) => {
        this.setCharacter(id)

    };

    setCharacter = (id = 0) => {
        const catalog = this.state.catalog;
        const res = catalog.filter(item => item.id === id);
        const [char] = res;
        this.setState({selectProduct: {...char}});
    };

    componentDidMount() {
        this.setCharacter()

    };
    // take the value of the card  <--

    render() {

        {console.log(this.state.selectProduct)}
        return (
            <div className="info-page">
                <div className="article-text">
                    <div className="main-content">
                        <h1>Catalog</h1>
s
                        <SortPanel
                            addStateNumRange={this.addStateNumRange}
                            handleChangeCheckbox={this.handleChangeCheckbox}
                            handleChange={this.handleChange}
                        />
                        <div className="catalog">
                            {this.state.catalog.map((item) =>
                                <div className="item-catalog" onClick={() => this.onCharSelected(item.id)}
                                     key={item.id}>
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