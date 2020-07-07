import React from "react";
import Slider from "react-slick";
import {NavLink} from "react-router-dom";

export const ContentCarouselOne = ({catalog, setCharacter, setForBasket, basketList}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }

    //const basketListSort = (basketList.map((item) => item.id))
    //const carouselOnePropsSort = (carouselOneProps.map((item) => item.id))
    //const res = basketListSort.filter(value => carouselOnePropsSort.includes(value))
    //const res = basketListSort.filter(value => carouselOnePropsSort.includes(value)).join(',')

   //console.log('basketListSort', basketListSort)
   //console.log('carouselOnePropsSort', carouselOnePropsSort)
   //console.log('res', res)

    //console.log(basketList);
    return (
        <Slider {...settings}>
            {/*{this.state.catalog.filter((item) => item.typeProduct === 1).map((item) =>*/}
            {catalog.filter((item) => item.filterIcon.val === 1).map((item) =>
                <div className="item-product" key={item.id}>
                    <div className="catalog-product">
                        <NavLink to={item.link ? item.link : ''} onClick={() => setCharacter(item.id)} className="link-product">
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
                            <div className={`${"btn-buy"} ${item.idBasket === true ? 'inBasket' : 'noBasket'}`} onClick={() => setForBasket(item.id)}>
                                <button>
                                    {item.idBasket === true ? item.inBasket : item.buy}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Slider>
    )
};
