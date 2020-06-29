import React, {Component} from "react";
import MainWindow from "../mainWindow";
import Brand from "../brand";
import Content from "../content";
import AboutCompany from "../aboutCompany";
import InfoProduct from "../infoProduct";
import BasketProduct from "../basketProduct/BascketProduct";
import {catalog} from "../sidebar/constant";

class Home extends Component {
    render() {
        return (
            <div className="home">

                {/*<div className={`${"layout"} ${this.props.stateToggleClass ? "active" : ""}`}>*/}
                <MainWindow/>
                <Brand/>
                <Content
                    setCharacter={this.props.setCharacter}
                    setForBasket={this.props.setForBasket}
                    wordReplacement={this.props.wordReplacement}
                />
                <AboutCompany/>
                <InfoProduct/>
            </div>
        )
    }
}

export default Home