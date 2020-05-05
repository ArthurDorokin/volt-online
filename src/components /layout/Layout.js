import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";

class Layout extends Component{
    render() {
        return (
            <div className='layout'>
                <main>
                    <Header/>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        )
    }
}
export default Layout