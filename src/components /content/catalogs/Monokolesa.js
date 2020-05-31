import React, {Component} from "react";
import {catalog} from "../../sidebar/constant";

export const Monokolesa = () => {

    return (
        <div className="main-catalogs">
            <div className="container">
                <h1>Моноколеса</h1>
                <div className="wrap-product">
                    {/*<div className="sortPanel">*/}
                    {/*    <p>Фильтр</p>*/}
                    {/*</div>*/}
                    <div className="products">
                        <div className="catalog">
                            {catalog.filter((item) => item.typeProduct === 4).map((item) =>
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
            </div>
        </div>
    )
};

export default Monokolesa;