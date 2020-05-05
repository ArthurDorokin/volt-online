import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Route, Switch} from 'react-router-dom'
import AboutCompany from "./components /aboutCompany";
import Layout from "./components /layout/Layout";
import Home from "./components /layout/Home";
import NotFound from "./components /notFound/NotFound";

//Route infoProduct
import VidyElektrosamokatov from './components /infoProduct/infoProductPages/VidyElektrosamokatov.js'
import NauchitsyaKatatsya from './components /infoProduct/infoProductPages/NauchitsyaKatatsya.js'
import SostoitGiroskyter from './components /infoProduct/infoProductPages/SostoitGiroskyter.js'
import ElektrosamokatPrintsip from './components /infoProduct/infoProductPages/ElektrosamokatPrintsip.js'
import InteresnyeFakty from './components /infoProduct/infoProductPages/InteresnyeFakty.js'
import SkorostMonokolesa from './components /infoProduct/infoProductPages/SkorostMonokolesa.js'
import ChtoTakoeSigvey from './components /infoProduct/infoProductPages/ChtoTakoeSigvey.js'
//Route infoProduct

const App = () => (
    <Layout className="App">
        <Switch>
            <Route exact path="/" component={Home}/>
            {/*infoProduct*/}
            <Route path="/vidy-elektrosamokatov/" component={VidyElektrosamokatov}/>
            <Route path="/kak-nauchitsya-katatsya-na-monokolese/" component={NauchitsyaKatatsya}/>
            <Route path="/iz-chego-sostoit-giroskyter/" component={SostoitGiroskyter}/>
            <Route path="/elektrosamokat.-printsip-raboty/" component={ElektrosamokatPrintsip}/>
            <Route path="/interesnye-fakty-pro-elektrovelosiped/" component={InteresnyeFakty}/>
            <Route path="/skorost-monokolesa/" component={SkorostMonokolesa}/>
            <Route path="/chto-takoe-sigvey/" component={ChtoTakoeSigvey}/>
            {/*404*/}
            <Route path='*' exact={true} component={NotFound}/>
        </Switch>
    </Layout>
);

export default App;
