import React, {Component} from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Switch, Route} from "react-router-dom";
// import AboutCompany from "./components/aboutCompany";
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import NotFound from "./components/notFound/NotFound";
import CardProduct from "./components/cardProduct/CardProduct"

//brandInfo -->
import Airwheel from './components/brand/brandInfo/Airwheel.js'
import Citycoco from './components/brand/brandInfo/Citycoco.js'
import Haibike from './components/brand/brandInfo/Haibike.js'
import Mijia from './components/brand/brandInfo/Mijia.js'
import Ninebot from './components/brand/brandInfo/Ninebot.js'
import Segway from './components/brand/brandInfo/Segway.js'
import SmartBalance from './components/brand/brandInfo/SmartBalance.js'
import Xiaomi from './components/brand/brandInfo/Xiaomi.js'
// <-- brandInfo

//catalogProduct -->
import Skeyt from './components/content/catalogs/Skeyt.js'
import Elektrosamokaty from './components/content/catalogs/Elektrosamokaty.js'
import Elektrovelosipedy from './components/content/catalogs/Elektrovelosipedy.js'
import Monokolesa from './components/content/catalogs/Monokolesa.js'
import Giroskutery from './components/content/catalogs/Giroskutery.js'
import Segvei from './components/content/catalogs/Segvei.js'
// <-- catalogProduct

//Route infoProduct -->
import VidyElektrosamokatov from './components/infoProduct/infoProductPages/VidyElektrosamokatov.js'
import NauchitsyaKatatsya from './components/infoProduct/infoProductPages/NauchitsyaKatatsya.js'
import SostoitGiroskyter from './components/infoProduct/infoProductPages/SostoitGiroskyter.js'
import ElektrosamokatPrintsip from './components/infoProduct/infoProductPages/ElektrosamokatPrintsip.js'
import InteresnyeFakty from './components/infoProduct/infoProductPages/InteresnyeFakty.js'
import SkorostMonokolesa from './components/infoProduct/infoProductPages/SkorostMonokolesa.js'
import ChtoTakoeSigvey from './components/infoProduct/infoProductPages/ChtoTakoeSigvey.js'
// <-- Route infoProduct

//Route infoSidebar -->
import Catalog from './components/sidebar/Catalog.js'
import Onas from "./components/sidebar/Onas";
import Oplatadostavka from "./components/sidebar/Oplatadostavka";
import Obmenvozvrat from "./components/sidebar/Obmenvozvrat";
import Contacts from "./components/sidebar/Contacts";
import {catalog} from "./components/sidebar/constant";
// import Content from "./components/content";
// import Brand from "./components/brand";

// <-- Route infoSidebar

//Route OrderPage -->
import OrderPage from "./components/orderPage/OrderPage";

// <-- Route OrderPage

class App extends Component {
    state = {
        catalog,
        selectProduct: '',
        active: false,
        basketList: [],
        listInBasket: [],
        totalAmount: [],
        totalAmountSum: []
    };

    //take the value of the card -->
    setCharacter = (id) => {
        const catalog = this.state.catalog;
        const res = catalog.filter(item => item.id === id);
        const [card] = res;
        this.setState({selectProduct: {...card}});
    };
    // take the value of the card  <--

    //take the value of the card Basket -->
    setForBasket = (id) => {
        const catalog = this.state.catalog;
        const res = catalog.filter(item => item.id === id)
        const [card] = res;

        const basketList = this.state.basketList
        basketList.push({...card})

        //* change text btn
        const selectProduct = basketList.map(item => item.id)
        const result = catalog.map(item => {
            item.idBasket = selectProduct.indexOf(item.id) >= 0;
            return item;
        })
        this.setState({catalog: result})
        //* change text btn

        // basketList.map((item) => {
        //     const array1 = parseInt(item.price.replace(/\s+/g, ''), 10)
        //     const totalAmount = this.state.totalAmount
        //     totalAmount.push(array1)
        //     this.setState({totalAmount: totalAmount})
        //
        //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //     const reduceTotal = totalAmount.reduce(reducer);
        //     this.setState({totalAmountSum: reduceTotal})
        // })

    };
    // take the value of the card Basket  <--

    // delete product in basket
    deleteProduct = (id) => {
        this.setState(prevState => ({
            basketList: prevState.basketList.filter(item => item.id !== id)
        }));
    }
    // delete product in basket

    // toggleClass basket
    toggleClass = () => {
        const active = this.state.active;
        this.setState({
            active: !active
        })
    }
    // toggleClass basket


    render() {
        //{console.log('basketList', this.state.basketList)}
        //{console.log('totalAmount', this.state.totalAmount)}
        {
            console.log('catalog', this.state.catalog)
        }
        return (
            <Layout
                setCharacter={this.setCharacter}
                basketList={this.state.basketList}
                toggleClass={this.toggleClass}
                deleteProduct={this.deleteProduct}
                stateToggleClass={this.state.active}
                totalAmountSum={this.state.totalAmountSum}
            >
                <Switch>
                    <Route exact path="/"
                           render={(props) => <Home
                               catalog={this.state.catalog}
                               setForBasket={this.setForBasket}
                               setCharacter={this.setCharacter}
                               toggleClass={this.toggleClass}
                               tateToggleClass={this.state.active}
                               basketList={this.state.basketList}
                           />}/>
                    <Route path="/card-product/"
                           render={(props) => <CardProduct
                               stateProduct={this.state.selectProduct}
                               setCharacter={this.setCharacter}
                           />}/>
                    {/*brandInfo*/}
                    <Route path="/airwheel/" component={Airwheel}/>
                    <Route path="/citycoco/" component={Citycoco}/>
                    <Route path="/haibike/" component={Haibike}/>
                    <Route path="/mijia/" component={Mijia}/>
                    <Route path="/ninebot/" component={Ninebot}/>
                    <Route path="/segway/" component={Segway}/>
                    <Route path="/smart-balance/" component={SmartBalance}/>
                    <Route path="/xiaomi/" component={Xiaomi}/>
                    {/*catalogProduct*/}
                    <Route path="/skeyt/"
                           render={(props) => <Skeyt setCharacter={this.setCharacter}/>}/>
                    <Route path="/elektrosamokaty/"
                           render={(props) => <Elektrosamokaty setCharacter={this.setCharacter}/>}/>
                    <Route path="/elektrovelosipedy/"
                           render={(props) => <Elektrovelosipedy setCharacter={this.setCharacter}/>}/>
                    <Route path="/monokolesa/"
                           render={(props) => <Monokolesa setCharacter={this.setCharacter}/>}/>
                    <Route path="/giroskutery/"
                           render={(props) => <Giroskutery setCharacter={this.setCharacter}/>}/>
                    <Route path="/segvei/"
                           render={(props) => <Segvei setCharacter={this.setCharacter}/>}/>
                    {/*infoProduct*/}
                    <Route path="/vidy-elektrosamokatov/" component={VidyElektrosamokatov}/>
                    <Route path="/kak-nauchitsya-katatsya-na-monokolese/" component={NauchitsyaKatatsya}/>
                    <Route path="/iz-chego-sostoit-giroskyter/" component={SostoitGiroskyter}/>
                    <Route path="/elektrosamokat.-printsip-raboty/" component={ElektrosamokatPrintsip}/>
                    <Route path="/interesnye-fakty-pro-elektrovelosiped/" component={InteresnyeFakty}/>
                    <Route path="/skorost-monokolesa/" component={SkorostMonokolesa}/>
                    <Route path="/chto-takoe-sigvey/" component={ChtoTakoeSigvey}/>
                    {/*infoProduct*/}
                    <Route path="/catalog/"
                           render={(props) => <Catalog setCharacter={this.setCharacter}/>}/>
                    <Route path="/o-nas/" component={Onas}/>
                    <Route path="/oplata-i-dostavka/" component={Oplatadostavka}/>
                    <Route path="/obmen-i-vozvrat/" component={Obmenvozvrat}/>
                    <Route path="/contacts/" component={Contacts}/>
                    {/*OrderPage*/}
                    <Route path="/order/" component={OrderPage}/>
                    {/*404*/}
                    <Route path='*' exact={true} component={NotFound}/>
                </Switch>
            </Layout>
        )
    }

};

export default App;
