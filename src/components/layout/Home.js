import React, {Component} from "react";
import MainWindow from "../mainWindow";
import Brand from "../brand";
import Content from "../content";
import AboutCompany from "../aboutCompany";
import InfoProduct from "../infoProduct";
// import BasketProduct from "../basketProduct/BascketProduct";
// import {catalog} from "../sidebar/constant";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <MainWindow/>
                <Brand/>
                <Content
                    catalog={this.props.catalog}
                    setCharacter={this.props.setCharacter}
                    setForBasket={this.props.setForBasket}
                    basketList={this.props.basketList}
                />
                <AboutCompany/>
                <InfoProduct/>
            </div>
        )
    }
}

export default Home