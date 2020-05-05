import React, {Component} from "react";
import "./notFound.css"

class NotFound extends Component{
    render() {
        return (
            <div className="notFound">
                <div className="mainWindow">
                    <div className="container">
                        <div className="wrap-content">
                            <div className="img"></div>
                            <div className="title">
                                <h1>Not Found</h1>
                                <p>404</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NotFound


