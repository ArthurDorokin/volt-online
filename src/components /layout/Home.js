import React, {Component} from "react";
import MainWindow from "../mainWindow";
import Brand from "../brand";
import Content from "../content";
import AboutCompany from "../aboutCompany";
import InfoProduct from "../infoProduct";

class Home extends Component{
    render() {
        return (
            <div className="home">
                <MainWindow/>
                <Brand/>
                <Content/>
                <AboutCompany/>
                <InfoProduct/>
            </div>
        )
    }
}
export default Home