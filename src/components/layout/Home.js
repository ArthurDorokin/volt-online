import React, {Component} from "react";
import MainWindow from "../mainWindow";
import Brand from "../brand";
import Content from "../content";
import AboutCompany from "../aboutCompany";
import InfoProduct from "../infoProduct";

class Home extends Component{
    render() {
        //const { setCharacter } = this.props;
        return (
            <div className="home">
                <MainWindow/>
                <Brand/>
                <Content setCharacter={this.props.setCharacter} />
                <AboutCompany/>
                <InfoProduct/>
            </div>
        )
    }
}
export default Home