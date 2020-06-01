import React, {Component} from "react";
import './AboutCompany.css'
import {aboutCompany} from "../aboutCompany/constant"

class AboutCompany extends Component {
    render() {
        return (
            <div className="aboutCompany">
                <div className="container">
                    <div className="wrapAboutCompany">
                        <h4>О нашей компании</h4>
                        <div dangerouslySetInnerHTML={{__html: aboutCompany.aboutCompanyInfo[0].info}}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default AboutCompany