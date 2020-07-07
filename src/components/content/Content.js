import React, {Component} from "react";
import './content.css'
import {ContentCarouselOne} from './ContentCarouselOne';
import {ContentCarouselTwo} from './ContentCarouselTwo';
import {ContentCarouselThree} from './ContentCarouselThree';
//import {catalog} from "../sidebar/constant"
import {Banner} from './Banner';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-content">
                        <div className="carousel-init carousel-one">
                            <ContentCarouselOne catalog={this.props.catalog}
                                                setCharacter={this.props.setCharacter}
                                                setForBasket={this.props.setForBasket}
                                                basketList={this.props.basketList}
                            />
                        </div>
                        <div className="carousel-init carousel-two">
                            <ContentCarouselTwo catalog={this.props.catalog}
                                                setCharacter={this.props.setCharacter}
                                                setForBasket={this.props.setForBasket}
                                                basketList={this.props.basketList}
                            />
                        </div>
                        <Banner />
                        <div className="carousel-init carousel-three">
                            <ContentCarouselThree catalog={this.props.catalog}
                                                  setCharacter={this.props.setCharacter}
                                                  setForBasket={this.props.setForBasket}
                                                  basketList={this.props.basketList}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content