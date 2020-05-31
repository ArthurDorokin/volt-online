import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AboutCompany from "./components /aboutCompany";
import Layout from "./components /layout/Layout";
import Home from "./components /layout/Home";
import NotFound from "./component /notFound/NotFound";

//brandInfo -->
import Airwheel from './components /brand/brandInfo/Airwheel.js'
import Citycoco from './components /brand/brandInfo/Citycoco.js'
import Haibike from './components /brand/brandInfo/Haibike.js'
import Mijia from './components /brand/brandInfo/Mijia.js'
import Ninebot from './components /brand/brandInfo/Ninebot.js'
import Segway from './components /brand/brandInfo/Segway.js'
import SmartBalance from './components /brand/brandInfo/SmartBalance.js'
import Xiaomi from './components /brand/brandInfo/Xiaomi.js'
// <-- brandInfo

//catalogProduct -->
import Skeyt from './components /content/catalogs/Skeyt.js'
import Elektrosamokaty from './components /content/catalogs/Elektrosamokaty.js'
import Elektrovelosipedy from './components /content/catalogs/Elektrovelosipedy.js'
import Monokolesa from './components /content/catalogs/Monokolesa.js'
import Giroskutery from './components /content/catalogs/Giroskutery.js'
import Segvei from './components /content/catalogs/Segvei.js'
// <-- catalogProduct

//Route infoProduct -->
import VidyElektrosamokatov from './components /infoProduct/infoProductPages/VidyElektrosamokatov.js'
import NauchitsyaKatatsya from './components /infoProduct/infoProductPages/NauchitsyaKatatsya.js'
import SostoitGiroskyter from './components /infoProduct/infoProductPages/SostoitGiroskyter.js'
import ElektrosamokatPrintsip from './components /infoProduct/infoProductPages/ElektrosamokatPrintsip.js'
import InteresnyeFakty from './components /infoProduct/infoProductPages/InteresnyeFakty.js'
import SkorostMonokolesa from './components /infoProduct/infoProductPages/SkorostMonokolesa.js'
import ChtoTakoeSigvey from './components /infoProduct/infoProductPages/ChtoTakoeSigvey.js'
// <-- Route infoProduct

//Route infoSidebar -->
import Catalog from './components /sidebar/Catalog.js'
import Onas from "./components /sidebar/Onas";
import Oplatadostavka from "./components /sidebar/Oplatadostavka";
import Obmenvozvrat from "./components /sidebar/Obmenvozvrat";
import Contacts from "./components /sidebar/Contacts";
// <-- Route infoSidebar


const App = () => (
    <Layout className="App">
        <Switch>
            <Route exact path="/" component={Home}/>
            {/*brandInfo*/}
            <Route path="/airwheel/" component={Airwheel}/>
            <Route path="/citycoco/" component={Citycoco}/>
            <Route path="/haibike/" component={Haibike}/>
            <Route path="/mijia/" component={Mijia}/>
            <Route path="/ninebot/" component={Ninebot}/>
            <Route path="/segway/" component={Segway}/>
            <Route path="/smartBalance/" component={SmartBalance}/>
            <Route path="/xiaomi/" component={Xiaomi}/>
            {/*catalogProduct*/}
            <Route path="/skeyt/" component={Skeyt}/>
            <Route path="/elektrosamokaty/" component={Elektrosamokaty}/>
            <Route path="/elektrovelosipedy/" component={Elektrovelosipedy}/>
            <Route path="/monokolesa/" component={Monokolesa}/>
            <Route path="/giroskutery/" component={Giroskutery}/>
            <Route path="/segvei/" component={Segvei}/>
            {/*infoProduct*/}
            <Route path="/vidy-elektrosamokatov/" component={VidyElektrosamokatov}/>
            <Route path="/kak-nauchitsya-katatsya-na-monokolese/" component={NauchitsyaKatatsya}/>
            <Route path="/iz-chego-sostoit-giroskyter/" component={SostoitGiroskyter}/>
            <Route path="/elektrosamokat.-printsip-raboty/" component={ElektrosamokatPrintsip}/>
            <Route path="/interesnye-fakty-pro-elektrovelosiped/" component={InteresnyeFakty}/>
            <Route path="/skorost-monokolesa/" component={SkorostMonokolesa}/>
            <Route path="/chto-takoe-sigvey/" component={ChtoTakoeSigvey}/>
            {/*infoProduct*/}
            <Route path="/catalog/" component={Catalog}/>
            <Route path="/o-nas/" component={Onas}/>
            <Route path="/oplata-i-dostavka/" component={Oplatadostavka}/>
            <Route path="/obmen-i-vozvrat/" component={Obmenvozvrat}/>
            <Route path="/contacts/" component={Contacts}/>
            {/*404*/}
            <Route path='*' exact={true} component={NotFound}/>
        </Switch>
    </Layout>
);

export default App;
