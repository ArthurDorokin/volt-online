import React, {Component} from "react";
import MainWindow from "../mainWindow";
import Brand from "../brand";
import Content from "../content";
import AboutCompany from "../aboutCompany";
import InfoProduct from "../infoProduct";
import BasketProduct from "../basketProduct/BascketProduct";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <MainWindow/>
                <Brand/>
                <BasketProduct toggleClass={this.props.toggleClass} stateToggleClass={this.props.active}/>
                <Content setCharacter={this.props.setCharacter}/>
                <AboutCompany/>
                <InfoProduct/>
            </div>
        )
    }
}

export default Home