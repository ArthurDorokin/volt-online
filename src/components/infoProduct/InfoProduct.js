import React, {Component} from "react";
import './infoProduct.css'
import {InfoProductCarousel} from './InfoProductCarousel'

const InfoProduct = () => (
    <div className="infoProduct">
        <div className="container">
            <div className="wrpaInfoProduct">
                <div className="infoProductСarousel">
                    <InfoProductCarousel/>
                </div>
            </div>
        </div>
    </div>
);

export default InfoProduct