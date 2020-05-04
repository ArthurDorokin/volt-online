import React, {Component} from "react";
import './content.css'
import {ContentCarouselOne} from './ContentCarouselOne';
import {ContentCarouselTwo} from './ContentCarouselTwo';
import {ContentCarouselThree} from './ContentCarouselThree';
import {carouselOne, carouselTwo, carouselThree} from "../content/constant"
import {Banner} from './Banner';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="wrap-content">
                        <div className="carousel-init carousel-one">
                            <ContentCarouselOne carouselOneProps={carouselOne}/>
                        </div>
                        <div className="carousel-init carousel-two">
                            <ContentCarouselTwo carouselTwoProps={carouselTwo}/>
                        </div>
                        <Banner />
                        <div className="carousel-init carousel-three">
                            <ContentCarouselThree carouselThreeProps={carouselThree}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content