import React, {Component} from "react";
import Header from "../header";
import Footer from "../footer";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import Home from "./Home";

const Breadcrumbs = withBreadcrumbs()(({breadcrumbs}) => (
    <div className="breadcrumbs">
        {breadcrumbs.map(({breadcrumb, match}, index) => (
            <a key={match.url} href={match.url || ""}>{breadcrumb}</a>
        ))}
    </div>
));

class Layout extends Component {
    render() {

        return (
            <div className='layout'>
                <main>
                    <Header/>
                    <div className="breadcrumb">
                        <div className="container">
                            {(window.location.href) === 'http://localhost:3000/' ? "" : <Breadcrumbs/> }
                        </div>
                    </div>
                    {this.props.children}
                    <Footer/>
                </main>
            </div>
        )
    }
}

export default Layout