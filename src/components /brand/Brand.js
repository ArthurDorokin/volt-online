import React, {Component} from "react";
import './brand.css'
import {brandsList} from '../brand/constans.js';

class Brand extends Component {
    state = {active: false};

    toggleClass = () => {
        const active = this.state.active;
        this.setState({
            active: !active
        })
    };

    render() {
        return (
            <div className="brand">
                <div className="container">
                    <h2>Выбери свой траснпорт</h2>
                    <h4>Подходи с умом к выбору электротранспорта</h4>
                    <div className="wrapBrand">
                        <div className={`${"wrapB"} ${this.state.active ? "active" : ""}`}>
                            {brandsList.brands.map((item) =>
                                <div className="item-brand" key={item.id}>
                                    <a href={item.link}><img src={item.img} alt={item.alt}/></a>
                                </div>
                            )}
                        </div>

                        <div className="btn-more-brand"
                             onClick={this.toggleClass}>
                            <span>{this.state.active ? 'Свернуть' : 'Показать еще'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Brand